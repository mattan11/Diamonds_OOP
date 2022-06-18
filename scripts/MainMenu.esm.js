import {Common, HIDDEN_SCREEN, VISIBLE_SCREEN} from './Common.esm.js';
import {levelSelect} from './LevelSelect.esm.js';

const SCALE_PROPERTY = '--scale-value';
const START_SCREEN_ID = 'js-start-screen';
const START_SCREEN_SETTINGS_BUTTON_ID = 'js-settings-button';
const START_GAME_BUTTON_ID = 'js-start-game';
export const BASE_RESOLUTION_WIDTH = 640;
export const BASE_RESOLUTION_HEIGHT = 480;

class MainMenu extends Common {
  constructor() {
    super(START_SCREEN_ID);
    this.bindToGameElements();
    this.resizeGameWindow();
    window.addEventListener('resize', this.resizeGameWindow);
  }

  bindToGameElements() {
    const gameStartButton = this.bindToElement(START_GAME_BUTTON_ID);
    const gameSettingsButton = this.bindToElement(
      START_SCREEN_SETTINGS_BUTTON_ID
    );

    gameStartButton.addEventListener('click', () => this.showLevelScreen());
    gameSettingsButton.addEventListener('click', () =>
      this.showSettingsScreen()
    );
  }

  showLevelScreen() {
    this.changeVisibilityScreen(this.element, HIDDEN_SCREEN);
    this.changeVisibilityScreen(levelSelect.element, VISIBLE_SCREEN);
  }

  showSettingsScreen() {
    console.log('settings screen');
  }

  resizeGameWindow() {
    const {innerWidth: width, innerHeight: height} = window;
    const scale = Math.min(
      width / BASE_RESOLUTION_WIDTH,
      height / BASE_RESOLUTION_HEIGHT
    );

    document.documentElement.style.setProperty(SCALE_PROPERTY, scale);
  }
}

export const mainMenu = new MainMenu();
