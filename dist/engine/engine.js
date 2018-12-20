import { GLUtil, gl } from './gl/gl';
import * as vertexSource from './gl/glsl/vertex.glsl!text';
import * as fragmentSource from './gl/glsl/fragment.glsl!text';
/**
 * The game engine.
 */
var Engine = /** @class */ (function () {
    /**
     * Create a new engine.
     */
    function Engine() {
        console.log(vertexSource, fragmentSource);
    }
    /**
     * Start this engine.
     */
    Engine.prototype.start = function () {
        GLUtil.init();
        gl.clearColor(0, 0, 0, 1);
        this.loadShaders();
        // this._shader.use();
        this.loop();
    };
    /**
     * loop to draw on screen.
     */
    Engine.prototype.loop = function () {
        gl.clear(gl.COLOR_BUFFER_BIT);
        requestAnimationFrame(this.loop.bind(this));
    };
    Engine.prototype.loadShaders = function () {
        //this._shader = new Shader('basic',vertexSource,fragmentSource);
    };
    return Engine;
}());
export { Engine };
//# sourceMappingURL=engine.js.map