describe ("Player", function() {
  describe("initialize", function() {
    it ("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  describe ("create", function() { 
    it("Creates a new player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});  
describe ("Space", function() {
  describe("initialize", function() {
    it("is initialized with a coordinate value.", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new space object", function() {
      var testSpace = Space.create(1, 2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("lets a player mark a space", function() {
      var testPlayer = Player.create("O");
      var testSpace = Space.create(2, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});
describe("Board", function() {
  describe("initialize", function() {  
    it("creates 9 spaces when it is initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize(3, 3);
      testBoard.boardArray.length.should.equal(9);
    });
    it('creates board OBJECTS when initialized', function() {
      var testBoard = Object.create(Board);
      testBoard.initialize(3, 3);
      Space.isPrototypeOf(testBoard.boardArray[0]).should.equal(true);
    });
  }); 
  describe("create", function() {
    it('creates a board array', function() {
      var testBoard = Board.create(3, 3);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  }); 
});
describe("Game", function() {
  describe("createPlayers", function() {
    it("will create two players for each game", function() {
      var testGame = Object.create(Game);
      var testPlayer = testGame.createPlayers("X", "O");
      testGame.players.length.should.equal(2);
    });
  });
  describe("createBoard", function() {
    it("will create a board for each game", function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard(3, 3);
      testBoard.boardArray.length.should.equal(9);
    });
  });

  describe("check", function() {
    it("will check for a winner for 3 in a row", function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard(3,3);
      testGame.createPlayers("X", "O");
      var testPlayer = testGame.players[0]
      testBoard.boardArray[0].markBy(testPlayer);
      testBoard.boardArray[1].markBy(testPlayer);
      testBoard.boardArray[2].markBy(testPlayer);
      // console.log(testBoard.boardArray);
      testGame.check(testPlayer).should.equal(true);
    });
    it('will check for a winner for 3 in a column', function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard(3,3);
      testGame.createPlayers("X", "O");
      var testPlayer = testGame.players[0]
      testBoard.boardArray[3].markBy(testPlayer);
      testBoard.boardArray[4].markBy(testPlayer);
      testBoard.boardArray[5].markBy(testPlayer);
      console.log(testBoard.boardArray);
      testGame.check(testPlayer).should.equal(true);
    });
    it('will check for a winner for 3 in diangonal', function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard(3,3);
      testGame.createPlayers("X", "O");
      var testPlayer = testGame.players[0]
      testBoard.boardArray[2].markBy(testPlayer);
      testBoard.boardArray[5].markBy(testPlayer);
      testBoard.boardArray[8].markBy(testPlayer);
      console.log(testBoard.boardArray);
      testGame.check(testPlayer).should.equal(true);
    });
  });

  describe("move", function() {
    it("sets up a first player and change to the next player", function() {
      var testGame = Object.create(Game);
      var testBoard = testGame.createBoard(3,3);
      testGame.createPlayers("X","O");
      var testPlayer = testGame.players[0]
      testBoard.boardArray[3].markBy(testPlayer);
      testGame.move().should.eql[0,0,0,"X",0,0,0,0,0];
    })
  })
});
