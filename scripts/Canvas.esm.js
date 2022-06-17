import {CommonEsm} from './Common.esm.js';
import {media} from './Media.esm.js';

const GAME_SCREEN_ID = 'js-game-screen';
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;

class CanvasEsm extends CommonEsm {
  constructor() {
    super(GAME_SCREEN_ID);
    this.configureCanvas();
  }

  configureCanvas() {
    this.context = this.element.getContext('2d');
    this.context.canvas.width = CANVAS_WIDTH;
    this.context.canvas.height = CANVAS_HEIGHT;
    this.context.font = '20px Arial white';
    this.context.fillStyle = 'white';
  }

  drawGameOnCanvas() {
    this.drawBackground();
  }

  drawBackground() {
    console.log(media.backgroundImage);
    this.context.drawImage(media.backgroundImage, 0, 0);
  }
}

export const canvas = new CanvasEsm();
