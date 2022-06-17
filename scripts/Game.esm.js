import {CommonEsm, VISIBLE_SCREEN} from './Common.esm.js';
import {gameLevelsEsm} from './GameLevels.esm.js';
import {DATA_LOADED_EVENT_NAME} from './Loader.esm.js';
import {canvas} from './Canvas.esm.js';

class GameEsm extends CommonEsm {
  constructor() {
    super();
  }

  playLevel(level) {
    window.removeEventListener(DATA_LOADED_EVENT_NAME, this.playLevel);
    const levelInfo = gameLevelsEsm[level - 1];
    this.changeVisibilityScreen(canvas.element, VISIBLE_SCREEN);
    this.animate();
  }

  animate() {
    canvas.drawGameOnCanvas();
    this.animationFrame = window.requestAnimationFrame(() => this.animate());
  }
}

export const game = new GameEsm();