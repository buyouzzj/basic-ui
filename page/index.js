import basicPage from './page.vue';

basicPage.install = (Vue) => {
  Vue.component(basicPage.name, basicPage);
};

export default basicPage;
