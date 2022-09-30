const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/readFile",
  `this is combination of ${first} & ${second} created by writeFileSync`
);

writeFileSync("./content/readFile", ` this is an append text`, {
  flag: "a",
});

console.log(first, second);
