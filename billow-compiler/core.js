import { compile } from "walt-compiler"

/**
 * 编译project.json
 * @param {Object} jsonObject 
 * @returns {Object}
 */
 export const compileWalt = function (jsonObject) {
    var codeObject = {};
    for (var target in jsonObject["targets"]) {
        if (target["isStage"]) {
            codeObject["stage"] = "";
        }
        else {
            var genCode = "";
            
        }
    }
};  