var colors = require("./config.json");
var fs = require("fs");
var Generator = require("./generator.js");

var DIR = "./data/"

for (var i in colors) {
    var text = Generator.start(colors[i].length);

    fs.writeFile(DIR + colors[i].language + colors[i].extension, text);
}
