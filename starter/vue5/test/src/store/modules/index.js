const requireModule = require.context('.', false, /\.store.js$/);
const modules = {};
requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.store.js)/g, '');
  modules[moduleName] = requireModule(fileName).default;
});

export default modules;

//index.js내엔 modules내의 js를 가리키는 수식이 기재되어 있음
