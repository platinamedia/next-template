const cp = require("child_process");

if (process.env.NODE_ENV === "production") {
  process.exit(0);
}

cp.execSync("git config --local core.hooksPath ./.git-hooks");
