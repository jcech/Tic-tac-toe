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
      var testBoard = board.Create(3, 3);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  }); 
});


