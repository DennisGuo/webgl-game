import { gl } from './gl';

export class Shader {

    private _name: string;
    private _program: WebGLProgram;

    /**
     * Create new Shader.
     * @param name shader name
     * @param vertexSource  vertex shader source string
     * @param fragmentSource fragment shader source string
     */
    public constructor(name: string, vertexSource: string, fragmentSource: string) {
        this._name = name;

        let vertexShader = this.loadShader(vertexSource, gl.VERTEX_SHADER); // FOR 3D
        let fragmentShader = this.loadShader(fragmentSource, gl.FRAGMENT_SHADER); // FOR 
        this._program = this.createProgram(vertexShader,fragmentShader);
    }

    /**
     * Get shader name.
     */
    public getName(): string {
        return this._name;
    }

    /**
     * Use programe.
     */
    public use():void{
        gl.useProgram(this._program);
    }

    private loadShader(source: string, shaderType: number): WebGLShader {
        let shader: WebGLShader = gl.createShader(shaderType);

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        let error = gl.getShaderInfoLog(shader);
        if (error !== '') {
            throw new Error('Error compiling shader ' + this._name + ' : ' + error);
        }

        return shader;
    }

    private createProgram(vertexShader:WebGLShader,fragmentShader:WebGLShader): WebGLProgram {

        let program: WebGLProgram = gl.createProgram();
        // Attach pre-existing shaders
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);

        gl.linkProgram(program);

        let error = gl.getProgramInfoLog(program);
        if (error !== '') {
            throw new Error('Error linking shader ' + this._name + ' : ' + error);
        }

        return program;
    }
}