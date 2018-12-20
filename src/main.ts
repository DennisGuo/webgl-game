import { Engine } from './engine/engine';

import './main.less';

/**
 * Start the main app after dom loaded.
 */
window.onload = ()=>{
    // let engine :GE.Engine  = new GE.Engine();
    // engine.start();
    let engine : Engine = new Engine();
    engine.start();
}