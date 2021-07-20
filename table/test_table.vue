<template>
  <basic-table
    :columns="tableColumns"
    :data="tableData"
    :pageParams="paging"
    @handleSearch="getTableData"
  >
  </basic-table>
</template>

<script>
import basicTable from './table.vue';

export default {
  name: 'TestTable',
  components: {
    basicTable,
  },
  data() {
    return {
      tableData: [{"userName":"季啸虎","empno":"XiaoHu","mobile":"15267144743","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210720/162675074276380246096-54e3-4a0d.jpeg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-07-20 11:12:22","location":"杭州市余杭区梦想小镇"},{"userName":"季啸虎","empno":"XiaoHu","mobile":"15267144743","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210719/1626673791258d477e1a9-9b83-4ce1.jpeg","typeDesc":"内勤打卡","type":"INNER","time":"2021-07-19 13:49:51","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210705/16254641937617a37e232-5638-4ea9.jpg","typeDesc":"内勤打卡","type":"INNER","time":"2021-07-05 13:49:55","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"指定产品销售拜访","taskType":"PRODUCT","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210702/1625208209414bc9478b3-32af-4b09.jpeg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-07-02 14:43:29","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210702/16252076402962dc2b6f0-395e-4c20.jpeg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-07-02 14:34:00","location":"杭州市余杭区梦想小镇"},{"userName":"张志进","empno":"FengChuiGuo","mobile":"15067179123","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210702/16251992313023db6e7c4-9d15-44f8.jpeg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-07-02 12:13:51","location":"杭州市余杭区梦想小镇"},{"userName":"林璐","empno":"BeiLuoShiMen","mobile":"13671706112","taskTypeDesc":"其它","taskType":"OTHER","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210701/1625110739503e35a180b-6473-4c9c.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-07-01 11:38:59","location":"杭州市余杭区梦想小镇"},{"userName":"林璐","empno":"BeiLuoShiMen","mobile":"13671706112","taskTypeDesc":"老客拜访","taskType":"OLD_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/1625022160986ba8c29d8-84c8-4ff4.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-30 11:02:41","location":"杭州市余杭区梦想小镇"},{"userName":"林璐","empno":"BeiLuoShiMen","mobile":"13671706112","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/1625022100818ecb1fac7-b18a-4584.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-30 11:01:40","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"老客拜访","taskType":"OLD_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/1625021308790346d375b-2302-400d.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-30 10:48:30","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"电话拜访","taskType":"MOBILE","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/16250211741718fbecc02-6886-4e30.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-30 10:46:15","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/1625021142184c51bd9c5-1055-4586.jpg","typeDesc":"内勤打卡","type":"INNER","time":"2021-06-30 10:45:43","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210630/1625021047216b27d6c85-0102-467e.jpg","typeDesc":"内勤打卡","type":"INNER","time":"2021-06-30 10:44:08","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210629/162494844308569f10c06-b254-4157.jpg","typeDesc":"内勤打卡","type":"INNER","time":"2021-06-29 14:34:04","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"-","taskType":null,"img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210629/16249380148634b0432f5-13a4-45f2.jpg","typeDesc":"内勤打卡","type":"INNER","time":"2021-06-29 11:40:16","location":"杭州市余杭区梦想小镇"},{"userName":"林璐","empno":"BeiLuoShiMen","mobile":"13671706112","taskTypeDesc":"老客拜访","taskType":"OLD_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210629/1624937931033d5e9dabb-0710-41e3.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-29 11:38:51","location":"杭州市余杭区梦想小镇"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou_1","mobile":"17086442269","taskTypeDesc":"老客拜访","taskType":"OLD_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210628/1624865217115219d5aff-306c-4685.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-28 15:26:57","location":"浙江省杭州市余杭区仓兴街"},{"userName":"张志进","empno":"FengChuiGuo","mobile":"15067179123","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210626/16246655594318325d0de-3c97-4373.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-26 07:59:18","location":"浙江省杭州市余杭区花鼓桥街"},{"userName":"李想","empno":"YiKeLaDeXiaoShiTou","mobile":"17086442269","taskTypeDesc":"新客拜访","taskType":"NEW_CUST","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210625/16246004416158f6977e7-b76a-4859.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-25 13:54:02","location":"嘟嘟嘟"},{"userName":"张志进","empno":"FengChuiGuo","mobile":"15067179123","taskTypeDesc":"指定产品销售拜访","taskType":"PRODUCT","img":"http://startdtadmin.oss-cn-hangzhou.aliyuncs.com/ctccscrm/clockin/20210625/1624589590994934abbbc-2b9a-417a.jpg","typeDesc":"外勤打卡","type":"OUTER","time":"2021-06-25 10:53:10","location":"浙江省杭州市余杭区仓兴街"}],
      paging: {
        current: 1,
        size: 20,
        total: 29,
      }
    }
  },
  computed: {
    tableColumns() {
      return [
        { label: '客户经理名字', prop: 'userName' },
        { label: '关联任务', prop: 'taskTypeDesc' },
        { label: '打卡图片', prop: 'img', type: 'img', preview: true, style: 'width: 80px; height: 80px' },
        { label: '考勤状态', prop: 'typeDesc' },
        { label: '打卡时间', prop: 'time', width: 150 },
        { label: '打卡位置', prop: 'location' },
      ];
    },
  },
  methods: {
    getTableData() {}
  }
}
</script>
