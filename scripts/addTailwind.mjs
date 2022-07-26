import cp from "node:child_process";
import fs from "node:fs/promises";

const postcssConfig = `module.exports = {
  plugins: {
    autoprefixer: {},
    "tailwindcss/nesting": {},
    tailwindcss: {}
  }
};
`;

const tailwindConfig = `/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: []
};
`;

const appCss = `@tailwind base;
@tailwind utilities;
@tailwind components;
`;

cp.exec("npm i -D tailwindcss autoprefixer postcss");

await fs.writeFile("postcss.config.js", postcssConfig, "utf-8");
await fs.writeFile("tailwind.config.js", tailwindConfig, "utf-8");

await fs.mkdir("src/styles");
await fs.writeFile("src/styles/app.css", appCss, "utf-8");

let _appFile = await fs.readFile("src/pages/_app.tsx", "utf-8");
_appFile = `import "@/styles/app.css";

${_appFile}
`;
await fs.writeFile("src/pages/_app.tsx", _appFile, "utf-8");

cp.exec("npm run format");
