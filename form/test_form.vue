<template>
  <basic-form
    :columns="formColumns"
    :data="formData"
    label-width="80px"
    @handleEvent="refreshTableData"
  ></basic-form>
</template>

<script>

const attendanceStatusEnum = [
  { label: '内勤打卡', val: 'INNER' },
  { label: '外勤打卡', val: 'OUTER' },
];

export default {
  name: 'TestForm',
  components: {
  },
  data() {
    return {
      formData: {},
    }
  },
  computed: {
    formColumns() {
      return [
        { label: '名称', prop: 'empno', labelWidth: '80px', type: 'input', needSearch: true, span: 6 },
        { label: '手机号', prop: 'mobile', labelWidth: '80px', type: 'input', needSearch: true, span: 6 },
        { label: '创建时间', prop: 'createTime', type: 'date', dateType: 'datetimerange', needSearch: true, span: 12 },
        { label: '考勤状态', prop: 'type', labelWidth: '80px', type: 'select', list: attendanceStatusEnum, needSearch: true, span: 6 },
        { label: '', prop: 'search', type: 'search', span: 2 },
        { label: '', prop: 'create', type: 'btn', span: 2, text: '新建', btnType: 'default', on: { click: this.showDialog.bind(null, {}, 'create') } },
      ];
    },
  },
  methods: {
    refreshTableData() {},
    showDialog() {},
  },
}
</script>
