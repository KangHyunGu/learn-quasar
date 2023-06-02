import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  // application 내 globalproperties 추가
  app.config.globalProperties.hello = 'Hello Quasar!!';
});
