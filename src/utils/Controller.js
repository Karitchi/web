import Model from './Model.js';
import View from './View.js';

export default class Controller {
    constructor() {
      this.view = new View();
      this.view.setController(this);
      this.model = new Model(this.view);
    }
  
  play(cellId) {
    let isPlayValid = this.model.checkPlayValidity(cellId);
    if (isPlayValid) this.model.placeSymbol(cellId);
  } 
}