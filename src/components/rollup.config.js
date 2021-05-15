import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
const autoprefixer = require('autoprefixer');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/transform-runtime'],
      babelHelpers: 'runtime',
    }),
    postcss({
      plugins: [autoprefixer()],
      module: true,
    }),
  ],
  external: ['react', /@babel\/runtime/],
};
