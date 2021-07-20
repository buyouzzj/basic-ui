import basicTable from './table.vue';

basicTable.install = (Vue) => {
  Vue.component(basicTable.name, basicTable);
};

export default basicTable;
