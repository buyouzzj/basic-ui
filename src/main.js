import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '@/app.vue';
import router from '@/router';

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');