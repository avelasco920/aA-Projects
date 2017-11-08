const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../node/game.js"); // require appropriate file

$( () => {
  let $root = $(".ttt");
  let newGame = new Game();
  let view = new View(newGame, $root);
});
