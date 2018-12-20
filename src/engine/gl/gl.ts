
    
    /**
     * The WebGLRenderingContext.
     */
    export var gl : WebGLRenderingContext;

    /**
     * WebGL Util.
     */
    export class GLUtil {

        /**
         * Create or find webgl canvas and init webgl context.
         * @param elementId 
         */
        public static init(elementId?:string):HTMLCanvasElement {
            let canvas : HTMLCanvasElement;
            if(elementId !== undefined){
                canvas = document.getElementById(elementId) as HTMLCanvasElement;
                if(canvas === undefined){
                    throw new Error('Can not find canvas element with id '+elementId);
                }
            }else{
                canvas = document.createElement("canvas") as HTMLCanvasElement;
                canvas.style.width="100%";
                canvas.style.height="100%";
                document.body.appendChild(canvas);
            }

            gl = canvas.getContext("webgl");
            if(gl === undefined){
                throw new Error("Can not init webgl context.")
            }

            return canvas;
        }
    }
