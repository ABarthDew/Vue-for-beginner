import Vue from "vue";
import Vuex from "vuex";
import * as types from './modules/mutation_types.js'
import api from '../service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: '',
    errorState: '',
    isAuth: false
  },
  getters: {
    getUid: state => state.uid,
    getErrorState: state => state.errorState,
    getIsAuth: state => state.isAuth
  },
  mutations: {
    [types.UID](state, uid) {
      state.uid = uid
    },
    [types.ERROR_STATE](state, errorState) {
      state.errorState = errorState
    },
    [types.IS_AUTH](state, isAuth) {
      state.isAuth = isAuth
    }
  },
  actions: {
    setUID: ({commit}, data) => {
      commit(types.UID, data)
    },
    setErrorState: ({commit}, data) => {
      commit(types.ERROR_STATE, data)
    },
    setIsAuth: ({commit}, data) => {
      commit(types.IS_AUTH, data)
    },
    processResponse: (store, loginResponse) => {
      switch (loginResponse) {
        case 'noAuth':
          setErrorState(store, 'wrong id or password');
          setIsAuth(store, false);
          break;
        case 'done':
          setErrorState(store, 'no period');
          setIsAuth(store, false);
          break;
        default:
          setUID(store, loginResponse.UID);
          setErrorState(store, '');
          setIsAuth(store, true);
      }
    },
    async login(store, {uid, password}) {
      /* 로그인은 백엔드를 다녀와야 하냐 비동기 처리를 한다 */
      let loginResponse = await api.login(uid, password);
      processResponse(store, loginResponse);
      return store.getters.getIsAuth;
    }
  },
  modules: {}
});
