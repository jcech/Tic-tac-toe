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
  }
}
