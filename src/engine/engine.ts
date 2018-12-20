import { Shader } from './gl/shader';
import { GLUtil, gl } from './gl/gl';

////<reference path="./../../typings/glsl.d.ts"/>
// import * as vertexSource from './gl/glsl/vertex.glsl';
// import * as fragmentSource from './gl/glsl/fragment.glsl';
/**
 * The game engine.
 */
export class Engine {


    private _canvas: HTMLCanvasElement;
    private _shader: Shader;

    /**
     * Create a new engine.
     */
    public constructor() {
        //console.log(vertexSource,fragmentSource);
    }

    /**
     * Start this engine.
     */
    public start(): void {
        GLUtil.init();
        gl.clearColor(0, 0, 0, 1);
        this.loadShaders();
        this._shader.use();
        
        this.loop();
    }

    /**
     * loop to draw on screen.
     */
    private loop(): void {
        gl.clear(gl.COLOR_BUFFER_BIT);

        requestAnimationFrame(this.loop.bind(this));
    }

    private loadShaders(): void {
        let vertexSource = 
`
attribute vec3 a_position;

void main() {
    gl_Position = vec4(a_position,1.0);
}
`;
        let fragmentSource = 
`
precision mediump float;

void main() {
    gl_FragColor = vec4(1.0);
}
`;
        this._shader = new Shader('basic',vertexSource,fragmentSource);
        
    }
}
