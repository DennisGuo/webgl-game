import { gl } from './gl';
var Shader = /** @class */ (function () {
    /**
     * Create new Shader.
     * @param name shader name
     * @param vertexSource  vertex shader source string
     * @param fragmentSource fragment shader source string
     */
    function Shader(name, vertexSource, fragmentSource) {
        this._name = name;
        var vertexShader = this.loadShader(vertexSource, gl.VERTEX_SHADER); // FOR 3D
        var fragmentShader = this.loadShader(fragmentSource, gl.FRAGMENT_SHADER); // FOR 
        this._program = this.createProgram(vertexShader, fragmentShader);
    }
    /**
     * Get shader name.
     */
    Shader.prototype.getName = function () {
        return this._name;
    };
    /**
     * Use programe.
     */
    Shader.prototype.use = function () {
        gl.useProgram(this._program);
    };
    Shader.prototype.loadShader = function (source, shaderType) {
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        var error = gl.getShaderInfoLog(shader);
        if (error !== undefined) {
            throw new Error('Error compiling shader ' + this._name + ' : ' + error);
        }
        return shader;
    };
    Shader.prototype.createProgram = function (vertexShader, fragmentShader) {
        var program = gl.createProgram();
        // Attach pre-existing shaders
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        var error = gl.getProgramInfoLog(program);
        if (error !== undefined) {
            throw new Error('Error linking shader ' + this._name + ' : ' + error);
        }
        return program;
    };
    return Shader;
}());
export { Shader };
//# sourceMappingURL=shader.js.map