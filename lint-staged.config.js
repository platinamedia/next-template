module.exports = {
  "src/**/*.(ts|tsx)": () => "npx tsc --noEmit",
  "src/**/*.(ts|tsx|js|jsx)": () => "eslint",
  "*": () => "npm run check-format",
};
