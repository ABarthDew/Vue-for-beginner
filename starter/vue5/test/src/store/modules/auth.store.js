const module = {
  namespaced: true,
  state: {
    /* 관리자 아이디 */
    adminId: null,
    /* 로그인 아이디 */
    adminLoginId: null,
    /* 관리자 이름 */
    adminName: null,
  },
  getters: {
    /**
     * 로그인 여부
     * @param {Object} state
     */
    isLoggedIn(state) {
      return Boolean(state.adminId && state.adminLoginId && state.adminName);
    },
  },
  mutations: {
    /**
     * 인증 정보 넣기
     * @param {Object} state
     * @param {Object} auth 인증 정보
     */
    SET_AUTH(state, auth) {
      state.adminId = auth.adminId;
      state.adminLoginId = auth.adminLoginId;
      state.adminName = auth.adminName;
    },
    /**
     * 인증 정보 삭제
     * @param {Object} state
     */
    REMOVE_AUTH(state) {
      state.adminId = null;
      state.adminLoginId = null;
      state.adminName = null;
    },
  },
  actions: {
    /**
     * TODO 로그인
     * @param {Object} context
     * @param {Object} request 로그인 요청
     */
    async login({commit}, request) {
      // 개발용
      console.info('request.adminLoginId', request.adminLoginId);
      console.info('request.adminLoginPw', request.adminLoginPw);
      commit('SET_AUTH', {
        adminId: 'A100001',
        adminLoginId: 'admin',
        adminName: '관리자',
      });
      return Promise.resolve(true);
    },
    /**
     * TODO 로그아웃
     * @param {Object} context
     */
    async logout({commit}) {
      commit('REMOVE_AUTH');
      return Promise.resolve(true);
    }
  },
};


export default module;