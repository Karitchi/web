import Cell from "./components/Cell.js";
import Board from "./components/Board.js";
import ObserverManager from "./components/ObserverManager.js";
import Player from "./components/Player.js";

export default class Model {
  constructor(view) {
    this.oberverManager = new ObserverManager();
    this.oberverManager.registerObserver("board", view);
    this.board = this.createBoard();
    this.oberverManager.notifyObserversByType("board", this.board);
    this.createPlayers();
    this.currentPlayer = this.player1;
  }

  createCells(id) {
    let cell = new Cell(id);
    return cell;
  }

  createBoard() {
    let board = new Board();
    let cell = null;

    for (let i = 0; i < 9; i++) {
      cell = new Cell(i);
      board.cells.push(cell);
    }

    return board;
  }

  createPlayers() {
    this.player1 = new Player("cross");
    this.player2 = new Player("circle");
  }

  checkPlayValidity(cellId) {
    console.log(this.board.cells[cellId].symbol);
    if (this.board.cells[cellId].symbol === undefined) return true;
    return false;
  }

  placeSymbol(cellId) {
    this.board.cells[cellId].symbol = this.currentPlayer.symbol;
    // this.oberverManager.notifyObserversByType("board", this.board);
  }
}
