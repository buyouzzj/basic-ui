import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/app.vue';
import router from '@/router';
import { basicForm, basicTable } from '../dist/bundle.js';
console.log(basicForm);

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' });
Vue.use(basicForm);
Vue.use(basicTable);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
