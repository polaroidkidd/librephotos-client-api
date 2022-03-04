import {terser} from "rollup-plugin-terser";
import pluginTypescript from "@rollup/plugin-typescript";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import {babel} from "@rollup/plugin-babel";
import * as path from "path";
import pkg from "./package.json";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const moduleName = pkg.name;
const inputFileName = "src/index.ts";
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default {
    input: inputFileName,
    preserveModules: true,
    output: [
        {
            name: moduleName,
            dir: "./dist",
            format: "esm",
            sourcemap: false,
            banner,
            plugins: [terser()],
        },
    ],
    plugins: [
        peerDepsExternal({
            includeDependencies: false,
        }),
        pluginTypescript(),
        pluginCommonjs({
            extensions: [".js", ".ts"],
        }),
        babel({
            babelHelpers: "bundled",
            configFile: path.resolve(__dirname, ".babelrc.js"),
        }),
        pluginNodeResolve({
            browser: true,
        }),
    ],
}

