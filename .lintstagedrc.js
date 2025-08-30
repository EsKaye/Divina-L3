module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix --max-warnings=0',
    'prettier --write',
  ],
  '*.{json,md,mdx,html,css,scss,yaml,yml}': [
    'prettier --write',
  ],
  '*.sol': [
    'prettier --write',
    'solhint --fix',
  ],
};
