/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  printWidth: 100,
  bracketSpacing: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  tailwindStylesheet: './src/styles/global.css',
  tailwindFunctions: ['class', 'className', 'ngClass', 'class:list', '.*Cn'],
};

export default config;
