import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/form',
      name: 'form',
      component: () => import('../../form/test_form.vue'),
      meta: {
        title: 'Form表单'
      },
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('../../table/test_table.vue'),
      meta: {
        title: 'Table表格'
      },
    },
  ],
});
