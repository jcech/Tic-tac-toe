var Game = {
  createPlayers: function(player1Symbol, player2Symbol) {
    this.players = [];
    var playerOne = Player.create(player1Symbol);
    this.players.push(playerOne);  
    
    var playerTwo = Player.create(player2Symbol);
    this.players.push(playerTwo);
    return this.players;
  },

  createBoard: function(row, column) {
    this.board = Board.create(row, column);
    return this.board;
  },

  move: function() {
    
    
  },

  check: function(player) {
     

    
    // for (var i = 0; i <= 8; i++) {
      if ((this.board.boardArray[0].markedBy === player) && 
        (this.board.boardArray[1].markedBy === player) && 
        (this.board.boardArray[2].markedBy === player)) { 
        return true; 
      }
      else if ((this.board.boardArray[3].markedBy === player) &&
      (this.board.boardArray[4].markedBy === player) &&
      (this.board.boardArray[5].markedBy === player)) {
          return true;
      }
      else if ((this.board.boardArray[6].markedBy === player) &&
      (this.board.boardArray[7].markedBy === player) &&
      (this.board.boardArray[8].markedBy === player)) {
          return true;
      }
      else if ((this.board.boardArray[0].markedBy === player) &&
      (this.board.boardArray[3].markedBy === player) &&
      (this.board.boardArray[6].markedBy === player)) {
          return true;
      }
      else if ((this.board.boardArray[1].markedBy === player) &&
      (this.board.boardArray[4].markedBy === player) &&
      (this.board.boardArray[7].markedBy === player)) {
          return true;
      }
      else if ((this.board.boardArray[2].markedBy === player) &&
      (this.board.boardArray[5].markedBy === player) &&
      (this.board.boardArray[8].markedBy === player)) {
          return true;
      }
       

          // else if ((this.board.boardArray[3].markedBy.symbol === 'O') &&
          // (this.board.boardArray[4].markedBy.symbol === 'O') &&
          // (this.board.boardArray[5].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[6].markedBy.symbol === 'X') &&
          // (this.board.boardArray[7].markedBy.symbol === 'X') &&
          // (this.board.boardArray[8].markedBy.symbol === 'X')) {
          //   return true;
          // }  else if ((this.board.boardArray[6].markedBy.symbol === 'O') &&
          // (this.board.boardArray[7].markedBy.symbol === 'O') &&
          // (this.board.boardArray[8].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[0].markedBy.symbol === 'X') &&
          // (this.board.boardArray[3].markedBy.symbol === 'X') &&
          // (this.board.boardArray[6].markedBy.symbol === 'X')) {
          //   return true;
          // }  else if ((this.board.boardArray[0].markedBy.symbol === 'O') &&
          // (this.board.boardArray[3].markedBy.symbol === 'O') &&
          // (this.board.boardArray[6].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[1].markedBy.symbol === 'X') &&
          // (this.board.boardArray[4].markedBy.symbol === 'X') &&
          // (this.board.boardArray[7].markedBy.symbol === 'X')) {
          //   return true;
          // }  else if ((this.board.boardArray[1].markedBy.symbol === 'O') &&
          // (this.board.boardArray[4].markedBy.symbol === 'O') &&
          // (this.board.boardArray[7].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[2].markedBy.symbol === 'X') &&
          // (this.board.boardArray[5].markedBy.symbol === 'X') &&
          // (this.board.boardArray[8].markedBy.symbol === 'X')) {
          //   return true;
          // }  else if ((this.board.boardArray[2].markedBy.symbol === 'O') &&
          // (this.board.boardArray[5].markedBy.symbol === 'O') &&
          // (this.board.boardArray[8].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[0].markedBy.symbol === 'X') &&
          // (this.board.boardArray[4].markedBy.symbol === 'X') &&
          // (this.board.boardArray[8].markedBy.symbol === 'X')) {
          //   return true;
          // }  else if ((this.board.boardArray[0].markedBy.symbol === 'O') &&
          // (this.board.boardArray[4].markedBy.symbol === 'O') &&
          // (this.board.boardArray[8].markedBy.symbol === 'O')) {
          //   return true;
          // }  else if ((this.board.boardArray[2].markedBy.symbol === 'X') &&
          // (this.board.boardArray[4].markedBy.symbol === 'X') &&
          // (this.board.boardArray[6].markedBy.symbol === 'X')) {
           
          //   return true;
          // }  else if ((this.board.boardArray[2].markedBy.symbol === 'O') &&
          // (this.board.boardArray[4].markedBy.symbol === 'O') &&
          // (this.board.boardArray[6].markedBy.symbol === 'O')) {
          //   return true;
           // } 
           // else {
           //   return false;
           // }
    // }
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
          // console.log(this.boardArray);
          this.boardArray.push(Space.create(x, y));
        }
      } 
    },
    create: function (row, column) {
      var board = Object.create(Board); 
      board.initialize(row, column);
      // console.log(board);
      return board;
    }
};
