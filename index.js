const fooBarRule = require("./rules/no-disallowed-terms");

const plugin = { rules: { "no-disallowed-terms": fooBarRule } };

module.exports = plugin;
