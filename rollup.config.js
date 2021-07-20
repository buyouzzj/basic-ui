import vue from 'rollup-plugin-vue';
import less from 'rollup-plugin-less';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  external: [
    'vue',
    'element-ui'
  ],
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    less(),
  ]
}