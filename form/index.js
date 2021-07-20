import basicForm from './form.vue';

basicForm.install = (Vue) => {
  Vue.component(basicForm.name, basicForm);
};

export default basicForm;
