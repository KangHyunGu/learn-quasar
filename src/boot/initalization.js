import { boot } from 'quasar/wrappers'

// Vue Component 외부에서 사용
import { LocalStorage, Dark } from 'quasar';


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {

  console.log('boot file load initaliztion..');
  // 1. Dark mode 설정
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);

})
