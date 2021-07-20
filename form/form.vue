<template>
  <el-form
    ref="form"
    :class="className"
    :model="formData"
    :rules="rules"
    :label-width="getLabelWidth()"
    @submit.stop.prevent
  >
    <el-row type="flex" class="flex-wrap">
      <el-col
        v-for="(item) in getColumns()"
        :key="item.prop"
        :span="item.span || 23"
      >
        <el-form-item
          v-bind="item"
          :label="colon && item.label ? `${item.label}：` : item.label"
          :rules="getRules(item)"
          :label-width="getItemWidth(item)"
          :class="item.className"
        >
          <!-- solt -->
          <template v-if="item.type === 'slot'">
            <slot :name="item.prop" />
          </template>
          <!-- 文本 -->
          <template v-if="item.type === 'text'">
            <span :style="item.style">{{ getContent(item) }}</span>
          </template>
          <!-- 普通输入框 -->
          <el-input
            v-if="item.type === 'input'"
            v-model.trim="formData[item.prop]"
            :type="item.inputType || 'text'"
            :disabled="item.disabled"
            :placeholder="getPlaceholder(item)"
            @change="handleEvent(item)"
            v-on="item.on"
          />
          <!-- 文本输入框 -->
          <el-input
            v-if="item.type === 'textarea'"
            v-model.trim="formData[item.prop]"
            :type="item.type"
            :disabled="item.disabled"
            :placeholder="getPlaceholder(item)"
            :autosize="{minRows: 2, maxRows: 10}"
            @change="handleEvent(item)"
            v-on="item.on"
          />
          <!-- 计数器 -->
          <el-input-number
            v-if="item.type === 'inputNumber'"
            v-model.trim="formData[item.prop]"
            size="small"
            :min="item.min"
            :max="item.max"
            @change="handleEvent(item)"
            v-on="item.on"
          />
          <!-- 选择框 -->
          <el-select
            v-if="item.type === 'select'"
            v-model.trim="formData[item.prop]"
            :disabled="item.disabled"
            :clearable="item.clearable || true"
            :filterable="item.filterable || false"
            :multiple="item.multiple || false"
            :placeholder="getPlaceholder(item)"
            style="width: 100%"
            @change="handleEvent(item)"
            v-on="item.on"
          >
            <el-option
              v-for="(childItem) in item.list"
              :key="childItem[item.key || item.valueKey || 'val']"
              :label="childItem[item.labelKey || 'label']"
              :value="childItem[item.valueKey || 'val']"
            />
          </el-select>
          <el-radio-group
            v-if="item.type === 'radio'"
            v-model="formData[item.prop]"
            @change="handleEvent(item)"
          >
            <el-radio
              v-for="radio in item.list"
              :key="radio.label"
              :label="radio.val"
            >
              {{ radio.label }}
            </el-radio>
          </el-radio-group>
          <!-- 日期选择框 -->
          <el-date-picker
            v-if="item.type === 'date'"
            v-model="formData[item.prop]"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :type="item.dateType"
            :picker-options="item.timePickerOptions"
            :clearable="item.clearable || true"
            :disabled="item.disabled"
            :value-format="item.valueFormat || 'yyyy-MM-dd HH:mm:ss'"
            :placeholder="getPlaceholder(item)"
            style="width: 100%"
            @change="handleEvent(item)"
            @clear="handleEvent(item)"
            v-on="item.on"
          />
          <el-button
            v-if="item.type === 'search' || item.type === 'btn'"
            :type="item.btnType || 'primary'"
            @click="handleSearch(item)"
            v-on="item.on"
          >
            {{ item.text || '搜索' }}
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'BasicForm',
  props: {
    columns: {
      type: Array,
      default: () => ([]),
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    className: String,
    labelWidth: {
      type: [String, Number],
      default: '110px',
    },
    colon: Boolean,
    rules: Object,
    needSearch: Boolean,
  },
  computed: {
    formData: {
      get() {
        return this.data || {};
      },
      set(obj) {
        this.$emit('handleEvent', obj);
      },
    },
  },
  methods: {
    getLabelWidth() {
      if (!this.labelWidth.endsWith('px')) {
        return `${this.labelWidth}px`;
      }
      return this.labelWidth;
    },
    getItemWidth(item) {
      if (item.labelWidth) return item.labelWidth;
      if (item.label) return this.labelWidth;
      return '10px';
    },
    getColumns() {
      return this.columns;
    },
    getContent(item) {
      if (item.format) {
        return item.format(item);
      }
      return this.formData[item.prop];
    },
    getPlaceholder(item) {
      if (item.placeholder) return item.placeholder;
      if (item.type === 'select' || item.type === 'date') {
        return '请选择';
      }
      return '请输入';
    },
    handleEvent(item) {
      if (item.needSearch) this.handleSearch(item);
    },
    handleSearch(item) {
      if (item.type === 'btn') return;
      this.$emit('handleEvent', item);
    },
    getRules(item) {
      return [
        ...(item.rules || []),
        ...(item.required ? [{
          required: item.required,
          message: this.getPlaceholder(item),
        }] : []),
      ];
    },
  },
};
</script>

<style scoped>
.flex-wrap {
  flex-wrap: wrap;
}
</style>
