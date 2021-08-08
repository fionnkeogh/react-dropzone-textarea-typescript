// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  
  plugins: [
    // resolve({ browser: true }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    // commonjs(),
    typescript(),
  ],
  external: ['react', 'react-dom', 'path', 'react-dropzone', 'prop-types', 'classnames'],
};
