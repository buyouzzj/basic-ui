<template>
  <div class="table-wrapper">
    <el-table
      ref="basicTable"
      v-bind="$attrs"
      v-on="$listeners"
      v-loading="tableLoading"
      style="width: 100%;"
      :data="data"
      :size="size"
      @select="handleSelect"
      @select-all="handleSelectAll"
    >
      <el-table-column
        v-if="type === 'checkbox'"
        type="selection"
        width="40"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        v-if="type === 'radio'"
        label="单选"
        align="center"
        width="50"
        fixed="left"
      >
        <template slot-scope="scope">
          <el-radio v-model="currentRowId" :label="scope.row[selectedDataKey]"></el-radio>
        </template>
      </el-table-column>
      <template>
        <el-table-column
          v-bind="item"
           v-for="item in columns"
          :key="item.prop"
          :width="getColumnWidth(item)"
        >
          <template #default="{row, column, $index}">
            <slot :name="item.prop" :row="row" :column="column">
              <el-image
                v-if="item.type === 'img'"
                :style="item.style || ''"
                :src="format({ row, item }, item.format)"
                :preview-src-list="item.preview ? [format({ row, item }, item.format)] : []"
                v-bind="item.imgProps"
              />
              <div v-else :style="item.style">{{ format({ row, item, $index }, item.format) }}</div>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="page-wrapper">
      <basicPage
        v-if="showPage && pageParams.total > pageParams.size"
        :current.sync="pageParams.current"
        :total="pageParams.total"
        :size.sync="pageParams.size"
        :layout="pageParams.layout"
        @handleSearch="handleSearch"
      />
    </div>
  </div>
</template>

<script>
import basicPage from '../page/page.vue';

export default {
  components: { basicPage },
  name: 'BasicTable',
  props: {
    type: String,
    columns: {
      type: Array,
      default: () => ([]),
    },
    selectedData: Array,
    selectedDataKey: {
      type: String,
      default: 'id',
    },
    data: {
      type: Array,
      default: () => ([]),
    },
    size: {
      type: String,
      default: 'small',
    },
    pageParams: {
      type: Object,
      default: () => ({
        current: Number,
        size: Number,
        total: Number,
        layout: String,
      }),
    },
    showPage: {
      type: Boolean,
      default: true,
    },
    tableLoading: Boolean,
  },
  computed: {
    currentRowId: {
      get() {
        return this.selectedData.length ? this.selectedData[0] : '';
      },
      set(id) {
        this.$emit('update:selectedData', [id]);
      },
    },
  },
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler() {
        if (this.type === 'checkbox') {
          this.lastMultipleSelectionKey = [];
          this.triggerSelected();
        }
      },
    },
  },
  data() {
    return {
      lastMultipleSelectionKey: [],
    };
  },
  methods: {
    // 触发选中
    triggerSelected() {
      this.$nextTick(() => {
        this.data.forEach(row => {
          this.$refs.basicTable.toggleRowSelection(
            row,
            this.selectedData.includes(row[this.selectedDataKey]),
          );
        });
      });
    },
    handleSelect(list, row) {
      const multipleSelectionKey = list.map(ll => ll[this.selectedDataKey]);
      // 与上一次选中的key进行对比,如果多了数据直接push,如果少了数据从selectedData拿出来
      let selectKeys = this.selectedData;
      const type = this.compare(this.lastMultipleSelectionKey, multipleSelectionKey);
      if (type === 'push') {
        selectKeys = selectKeys.concat(row[this.selectedDataKey]);
      } else {
        selectKeys = selectKeys.filter(key => key !== row[this.selectedDataKey]);
      }
      this.$emit('update:selectedData', selectKeys);
      this.$emit('handleSelect', selectKeys);
      this.lastMultipleSelectionKey = multipleSelectionKey;
    },
    handleSelectAll(list) {
      let { selectedData } = this;
      const selectedKeys = list.map(ll => ll[this.selectedDataKey]);
      // 全选
      if (selectedKeys.length) {
        selectedData = [...new Set(selectedData.concat(selectedKeys))];
      } else {
        // 取消全选
        const keys = this.data.map(tt => tt[this.selectedDataKey]);
        selectedData = selectedData.filter(key => !keys.includes(key));
      }
      this.$emit('update:selectedData', selectedData);
    },
    compare(oldKeys, newKeys) {
      const oldLen = oldKeys.length;
      const newLen = newKeys.length;
      // 说明是新勾选了数据
      if (oldLen < newLen) return 'push';
      // 如果取消勾选
      return 'cancel';
    },
    // 切换单选框  methods 中
    changeRadio(event, row) {
      this.$emit('update:selectedData', [row[this.selectedDataKey]]);
    },
    // 获取两个数组中不同的元素
    getArrDifference(arr1, arr2) {
      return arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))[0];
    },
    format({ row, item, $index }, cb) {
      if (cb) return cb({ row, item, index: $index });
      return row[item.prop];
    },
    getColumnWidth(item) {
      if (typeof item.width === 'string') return item.width;
      if (typeof item.width === 'number') return String(item.width);
      return 'auto';
    },
    handleSearch() {
      this.$emit('handleSearch');
    },
  },
};
</script>

<style lang="css" scoped>
.page-wrapper {
  padding: 12px 0;
  text-align: right;
}
</style>
