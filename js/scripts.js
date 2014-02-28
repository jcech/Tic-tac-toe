var Game = {
  createPlayers: function() {


  }
}
var Player = {
  initialize: function(playerSymbol) {
    this.symbol = playerSymbol;
  },
  create: function(playerSymbol) {
    var player = Object.create(Player);
    player.initialize(playerSymbol);
    return player;
  }
}

var Space = {
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x, y) {
    var space = Object.create(Space);
    space.initialize(x, y);
    return space;
  },
  markBy: function(player) {
    this.markedBy = player;                 
  }
};

var Board = {
    initialize: function (row, column) {
      this.boardArray = [];
      for(var x = 1; x <= row; x++) {
        for(var y = 1; y <= column; y++) {
          this.boardArray.push(Space.create(x, y));
        }
      } 
    },
    create: function (row, column) {
      var board = Object.create(Board); 
      board.initialize(row, column);
      console.log(board);
      return board;
    }
};
