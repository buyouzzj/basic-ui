<template>
  <el-pagination
    layout="total, sizes, prev, pager, next, jumper"
    :current-page.sync="currentPage"
    :page-sizes="[10, 20, 40, 60, 80]"
    :page-size.sync="pageSize"
    :total="total"
    size="small"
    @size-change="handleSearch('size')"
    @current-change="handleSearch('page')"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'Paging',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: () => 'total, sizes, prev, pager, next',
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.current;
      },
      set(page) {
        this.$emit('update:current', page);
      },
    },
    pageSize: {
      get() {
        return this.size;
      },
      set(size) {
        this.$emit('update:size', size);
      },
    },
  },
  methods: {
    handleSearch(type) {
      if (type === 'size') {
        this.$emit('update:current', 1);
      }
      this.$emit('handleSearch');
    },
  },
};
</script>

<style>

</style>
