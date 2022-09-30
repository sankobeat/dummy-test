const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, resault) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = resault;
  readFile("./content/second.txt", "utf-8", (err, resault) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = resault;
    writeFile(
      "./content/resaultAsync.txt",
      "this is async text resault",
      (err, resault) => {
        if (err) {
          console.log(err);
        }
        console.log(resault);
      }
    );
  });
});
