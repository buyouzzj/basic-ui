<template>
  <div id="app">
    <el-row type="flex" class="row flex-wrap" :gutter="40">
      <el-col v-for="item in list" :key="item.value" :span="6" class="col">
          <router-link class="route" :to="item.value">{{ item.label }}</router-link>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      list: [
        { label: 'Form', value: 'form' },
        { label: 'Table', value: 'table' },
      ]
    }
  },

}
</script>

<style lang="css" scoped>
.flex-wrap {
  flex-wrap: wrap;
}
.route {
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 36px;
  line-height: 36px;
  border: 1px solid #409eff;
  background-color: #fff;
  border-radius: 8px;
  color: #409eff;
  transition: all .3s;
}
.route:hover {
  background-color: #409eff;
  color: #fff;
}
</style>

<style>
a {
  text-decoration: none;
}
</style>
