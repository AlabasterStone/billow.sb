/**
 * 编译project.json
 * @param {Object} jsonObject 
 * @returns {Object}
 */
export const compile = function (jsonObject) {
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