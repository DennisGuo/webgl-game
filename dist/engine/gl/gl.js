/**
 * The WebGLRenderingContext.
 */
export var gl;
/**
 * WebGL Util.
 */
var GLUtil = /** @class */ (function () {
    function GLUtil() {
    }
    /**
     * Create or find webgl canvas and init webgl context.
     * @param elementId
     */
    GLUtil.init = function (elementId) {
        var canvas;
        if (elementId !== undefined) {
            canvas = document.getElementById(elementId);
            if (canvas === undefined) {
                throw new Error('Can not find canvas element with id ' + elementId);
            }
        }
        else {
            canvas = document.createElement("canvas");
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            document.body.appendChild(canvas);
        }
        gl = canvas.getContext("webgl");
        if (gl === undefined) {
            throw new Error("Can not init webgl context.");
        }
        return canvas;
    };
    return GLUtil;
}());
export { GLUtil };
//# sourceMappingURL=gl.js.map