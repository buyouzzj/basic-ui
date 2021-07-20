import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import less from 'rollup-plugin-less';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    exports: 'named',
    globals: {
      vue: 'Vue'
    }
  },
  external: [
    'vue',
    'element-ui'
  ],
  plugins: [
    resolve(),
    vue({
      css: true,
      compileTemplate: true
    }),
    babel({
      exclude: '**/node_modules/**',
    }),
    less(),
    commonjs(),
    terser(),
  ]
}