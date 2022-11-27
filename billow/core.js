const fs = require('fs')

const SC_PROJ_FILE_PATH = "../test/testproject/project.json";

var fileData = fs.readFileSync(SC_PROJ_FILE_PATH, { encoding: "utf8", flag: "r" });
var jsonObject = JSON.parse(fileData);

for (var target in jsonObject.targets)
{
    target = jsonObject.targets[target];
    if (target.isStage)
    {
        fs.writeFileSync(`../test/testproject/dist/${target.name}.js`, "", "utf8");
    }
}