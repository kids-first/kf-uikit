import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
    {
        input: 'src/index.jsx',
        external: [
          'react', 
          'react-proptypes'
        ],
        plugins: [
          svg(),
          resolve({
            extensions: [ '.mjs', '.js', '.jsx', '.json' ],
          }),
          postcss({
            plugins: [],
            getExportNamed: false,
            getExport (id) {
              return cssExportMap[id];
            },
            extract: 'dist/styles.css',
          }),
          babel({
            babelrc:false,
            exclude: 'node_modules/**',
            presets: [['@babel/preset-env', { modules: false }],"@babel/react"],
            plugins: ["@babel/plugin-proposal-export-default-from"],
          }),
          commonjs(),
        ],
        output: [
          { file: pkg.main, format: 'cjs' },
          { file: pkg.module, format: 'es' }
        ]
    }
];
