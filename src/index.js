require("./global.css");
require("./assets/sprite.png");

const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build")
  }
};