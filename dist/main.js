import { Engine } from './engine/engine';
import './main.less';
/**
 * Start the main app after dom loaded.
 */
window.onload = function () {
    // let engine :GE.Engine  = new GE.Engine();
    // engine.start();
    var engine = new Engine();
    engine.start();
};
//# sourceMappingURL=main.js.map