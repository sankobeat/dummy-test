const os = require("os");

// infos about the current user

const user = os.userInfo();

// method that return the time the computer has been running in secondes

// console.log(`the system up time: ${os.uptime() / 60 / 60}`);

const curretOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(curretOS);
