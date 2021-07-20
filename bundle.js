'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = {
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

const _withId = /*#__PURE__*/vue.withScopeId("data-v-5dc64211");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_el_input_number = vue.resolveComponent("el-input-number");
  const _component_el_option = vue.resolveComponent("el-option");
  const _component_el_select = vue.resolveComponent("el-select");
  const _component_el_radio = vue.resolveComponent("el-radio");
  const _component_el_radio_group = vue.resolveComponent("el-radio-group");
  const _component_el_date_picker = vue.resolveComponent("el-date-picker");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_el_form_item = vue.resolveComponent("el-form-item");
  const _component_el_col = vue.resolveComponent("el-col");
  const _component_el_row = vue.resolveComponent("el-row");
  const _component_el_form = vue.resolveComponent("el-form");

  return (vue.openBlock(), vue.createBlock(_component_el_form, {
    ref: "form",
    class: $props.className,
    model: $options.formData,
    rules: $props.rules,
    "label-width": $options.getLabelWidth(),
    onSubmit: _cache[1] || (_cache[1] = vue.withModifiers(() => {}, ["stop","prevent"]))
  }, {
    default: _withId(() => [
      vue.createVNode(_component_el_row, {
        type: "flex",
        class: "flex-wrap"
      }, {
        default: _withId(() => [
          (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList($options.getColumns(), (item) => {
            return (vue.openBlock(), vue.createBlock(_component_el_col, {
              key: item.prop,
              span: item.span || 23
            }, {
              default: _withId(() => [
                vue.createVNode(_component_el_form_item, vue.mergeProps(item, {
                  label: $props.colon && item.label ? `${item.label}：` : item.label,
                  rules: $options.getRules(item),
                  "label-width": $options.getItemWidth(item),
                  class: item.className
                }), {
                  default: _withId(() => [
                    vue.createCommentVNode(" solt "),
                    (item.type === 'slot')
                      ? vue.renderSlot(_ctx.$slots, item.prop, { key: 0 })
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 文本 "),
                    (item.type === 'text')
                      ? (vue.openBlock(), vue.createBlock("span", {
                          key: 1,
                          style: item.style
                        }, vue.toDisplayString($options.getContent(item)), 5 /* TEXT, STYLE */))
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 普通输入框 "),
                    (item.type === 'input')
                      ? (vue.openBlock(), vue.createBlock(_component_el_input, vue.mergeProps({
                          key: 2,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          modelModifiers: { trim: true },
                          type: item.inputType || 'text',
                          disabled: item.disabled,
                          placeholder: $options.getPlaceholder(item),
                          onChange: $event => ($options.handleEvent(item))
                        }, vue.toHandlers(item.on)), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "type", "disabled", "placeholder", "onChange"]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 文本输入框 "),
                    (item.type === 'textarea')
                      ? (vue.openBlock(), vue.createBlock(_component_el_input, vue.mergeProps({
                          key: 3,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          modelModifiers: { trim: true },
                          type: item.type,
                          disabled: item.disabled,
                          placeholder: $options.getPlaceholder(item),
                          autosize: {minRows: 2, maxRows: 10},
                          onChange: $event => ($options.handleEvent(item))
                        }, vue.toHandlers(item.on)), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "type", "disabled", "placeholder", "onChange"]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 计数器 "),
                    (item.type === 'inputNumber')
                      ? (vue.openBlock(), vue.createBlock(_component_el_input_number, vue.mergeProps({
                          key: 4,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          modelModifiers: { trim: true },
                          size: "small",
                          min: item.min,
                          max: item.max,
                          onChange: $event => ($options.handleEvent(item))
                        }, vue.toHandlers(item.on)), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "min", "max", "onChange"]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 选择框 "),
                    (item.type === 'select')
                      ? (vue.openBlock(), vue.createBlock(_component_el_select, vue.mergeProps({
                          key: 5,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          modelModifiers: { trim: true },
                          disabled: item.disabled,
                          clearable: item.clearable || true,
                          filterable: item.filterable || false,
                          multiple: item.multiple || false,
                          placeholder: $options.getPlaceholder(item),
                          style: {"width":"100%"},
                          onChange: $event => ($options.handleEvent(item))
                        }, vue.toHandlers(item.on)), {
                          default: _withId(() => [
                            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(item.list, (childItem) => {
                              return (vue.openBlock(), vue.createBlock(_component_el_option, {
                                key: childItem[item.key || item.valueKey || 'val'],
                                label: childItem[item.labelKey || 'label'],
                                value: childItem[item.valueKey || 'val']
                              }, null, 8 /* PROPS */, ["label", "value"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "disabled", "clearable", "filterable", "multiple", "placeholder", "onChange"]))
                      : vue.createCommentVNode("v-if", true),
                    (item.type === 'radio')
                      ? (vue.openBlock(), vue.createBlock(_component_el_radio_group, {
                          key: 6,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          onChange: $event => ($options.handleEvent(item))
                        }, {
                          default: _withId(() => [
                            (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(item.list, (radio) => {
                              return (vue.openBlock(), vue.createBlock(_component_el_radio, {
                                key: radio.label,
                                label: radio.val
                              }, {
                                default: _withId(() => [
                                  vue.createTextVNode(vue.toDisplayString(radio.label), 1 /* TEXT */)
                                ]),
                                _: 2 /* DYNAMIC */
                              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]))
                            }), 128 /* KEYED_FRAGMENT */))
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "onChange"]))
                      : vue.createCommentVNode("v-if", true),
                    vue.createCommentVNode(" 日期选择框 "),
                    (item.type === 'date')
                      ? (vue.openBlock(), vue.createBlock(_component_el_date_picker, vue.mergeProps({
                          key: 7,
                          modelValue: $options.formData[item.prop],
                          "onUpdate:modelValue": $event => ($options.formData[item.prop] = $event),
                          "range-separator": "至",
                          "start-placeholder": "开始日期",
                          "end-placeholder": "结束日期",
                          type: item.dateType,
                          "picker-options": item.timePickerOptions,
                          clearable: item.clearable || true,
                          disabled: item.disabled,
                          "value-format": item.valueFormat || 'yyyy-MM-dd HH:mm:ss',
                          placeholder: $options.getPlaceholder(item),
                          style: {"width":"100%"},
                          onChange: $event => ($options.handleEvent(item)),
                          onClear: $event => ($options.handleEvent(item))
                        }, vue.toHandlers(item.on)), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "type", "picker-options", "clearable", "disabled", "value-format", "placeholder", "onChange", "onClear"]))
                      : vue.createCommentVNode("v-if", true),
                    (item.type === 'search' || item.type === 'btn')
                      ? (vue.openBlock(), vue.createBlock(_component_el_button, vue.mergeProps({
                          key: 8,
                          type: item.btnType || 'primary',
                          onClick: $event => ($options.handleSearch(item))
                        }, vue.toHandlers(item.on)), {
                          default: _withId(() => [
                            vue.createTextVNode(vue.toDisplayString(item.text || '搜索'), 1 /* TEXT */)
                          ]),
                          _: 2 /* DYNAMIC */
                        }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["type", "onClick"]))
                      : vue.createCommentVNode("v-if", true)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["label", "rules", "label-width", "class"])
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["span"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class", "model", "rules", "label-width"]))
});

script.render = render;
script.__scopeId = "data-v-5dc64211";
script.__file = "form/form.vue";

script.install = (Vue) => {
  Vue.component(script.name, script);
};

exports.basicForm = script;
