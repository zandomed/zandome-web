/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  // Run ESLint on all staged files
  '**/*.{mjs,cjs,js,ts,astro,jsx,tsx}': (filenames) => {
    return `bun run lint:check:staged -- ${filenames.join(' ')}`;
  },
  // Run Prettier on all staged files
  '**/*.{mjs,cjs,js,ts,astro,jsx,tsx,json,yml,yaml}': (filenames) => {
    return `bun run format:check:staged -- ${filenames.join(' ')}`;
  },
};
