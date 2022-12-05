const PIXI = require("pixi.js")

//TODO: 编译时检查数据类型
//SAE-json.md

/**
 * 转换scratch到canvas坐标系
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Object}
 */
function scratchPosToCanvas(x, y) {
    let canvas_x = window.innerWidth + x;
    let canvas_y = window.innerHeight + y;
    return { x: canvas_x, y: canvas_y };
}

/**
 * 转换canvas到scratch坐标系
 * @param {Number} x 
 * @param {Number} y 
 * @returns {Object}
 */
function canvasPosToScratch(x, y) {
    let scratch_x = x - window.innerHeight;
    let scratch_y = y - window.innerHeight;
    return { x: scratch_x, y: scratch_y };
}

/**
 * 转换scratch到canvas角度
 * @param {Number} angle
 * @returns {Number}
 */
function scratchAngleToCanvas(angle) {
    return angle - 90;
}

/**
 * 转换canvas到scratch角度
 * @param {Number} angle
 * @returns {Number}
 */
function canvasAngleToScratch(angle) {
    return angle + 90;
}

/**
 * motion_movesteps
 * @param {PIXI.Sprite} sprite
 * @param {Number} steps
 * @returns {PIXI.Sprite}
 */
function motion_movesteps(sprite, steps) {
    //用三角函数算出坐标偏移
    //sin(A) = y/z
    //cos(A) = x/z
    //1 angle = pi/180 rad
    let offset_x = Math.sin(canvasAngleToScratch(sprite.angle) * Math.PI / 180) * steps;
    let offset_y = Math.cos(canvasAngleToScratch(sprite.angle) * Math.PI / 180) * steps;
    sprite.x += offset_x;
    sprite.y += offset_y;
    return sprite;
}

/**
 * @function __motion_turnright__
 * @param {PIXI.Sprite} sprite
 * @param {Number} degree
 * @return {PIXI.Sprite}
 */
function motion_turnright(sprite, degree) {
    sprite.angle += scratchAngleToCanvas(degree);
    return sprite;
}
PIXI.utils.sayHello