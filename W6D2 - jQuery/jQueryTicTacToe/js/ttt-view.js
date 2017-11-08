class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $unorderedList = $('ul.grid');
    $unorderedList.on('mouseover', event => {
      const $ul = $(event.currentTarget);
      if ($ul.find("li").is(event.target) && $(event.target).data('chosen') === false) {
        $(event.target).css('background-color','yellow');
      }
    });

    $unorderedList.on('mouseout', event => {
      const $ul = $(event.currentTarget);
      if ($ul.find("li").is(event.target) && $(event.target).data('chosen') === false) {
        $(event.target).css('background-color','gray');
      }
    });

    $unorderedList.on('click', event => {
      const $ul = $(event.currentTarget);
      if ($ul.find("li").is(event.target)) {
        this.makeMove(event.target);
        $(event.target).css('background-color','white');
      }
    });
  }

  makeMove(square) {
    let $position = $(square).data('pos');
    this.game.playMove($position);
    $(square).data('chosen', true);
    $(square).text(`${this.game.currentPlayer}`);
    $(square).css('font-size', '50px');
    if (this.game.isOver()) {
      alert('Congrats');
      $('ul').unbind('click');
      $('ul').unbind('mouseout');
      $('ul').unbind('mouseover');
    }
  }

  setupBoard() {
    let $body = $('body');
    $body.css('display', 'flex');
    $body.css('align-items', 'center');
    $body.css('margin', 'auto');
    const $unorderedList = $('<ul class="grid"></ul>');
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
      let $newItem = $('<li></li>');
      $newItem.data('pos', [i, j]);
      $newItem.data('chosen', false);
      $unorderedList.append($newItem);
      $newItem.css('float', 'left');
      $newItem.css('width','32.5%');
      $newItem.css('display','block');
      $newItem.css('border', '1px solid black');
      $newItem.css('height','120px');
      $newItem.css('text-align','center');
      $newItem.css('justify-content','center');
      $newItem.css('background-color','gray');
      }
    }
    $unorderedList.css('width', '420px');
    this.$el.append($unorderedList);
  }
}

module.exports = View;
