const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "",
  MONGODB: process.env.MONGODB || "mongodb://mongo:uMASvQLlPvAMLMOnmMiUDpKPnIAgeZRU@yamanote.proxy.rlwy.net:16142",
  OWNER_NUM: process.env.OWNER_NUM || "94776121326",
};
