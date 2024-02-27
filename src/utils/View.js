export default class view {
  setController(controller) {
    this.controller = controller;
  }

  update(type, data) {
    if (type !== "board") return;
    console.log(data);
    this.renderBoard(data);
  }

  renderBoard(board) {
    const HTMLboard = document.getElementById("board");
    HTMLboard.innerHTML = "";
    for (let i = 0; i < board.cells.length; i++) {
      const cell = board.cells[i];
      const HTMLcell = document.createElement("div");
      HTMLcell.classList.add("cell");
      HTMLcell.id = cell.id;
      HTMLcell.addEventListener("click", () => this.controller.play(cell.id));
      HTMLboard.appendChild(HTMLcell);
    }
  }
}