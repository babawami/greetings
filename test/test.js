describe("Greetings function, be able to count number of people greeted", function() {
  it("It should return hello when English radio button selected ", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    assert.equal(greetingsFactory.selectGreeting("english", "Andrew"), "Hello, Andrew")
  })
  it("It should return Goeie dag when Afrikaans radio button selected ", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    assert.equal(greetingsFactory.selectGreeting("afrikaans", "Andrew"), "Goeie Dag, Andrew")
  })
  it("It should return Molo when Sesotho radio button selected ", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    assert.equal(greetingsFactory.selectGreeting("sotho", "Andrew"), "Dumela, Andrew")
  })
  it("should be able to add names to the object only once ", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    greetingsFactory.selectGreeting('sotho', 'Andrew');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    assert.deepEqual(greetingsFactory.map(), {
      ANDREW: 0,
      TSHEPO: 0
    })
  })
  it("return number of the names in the map", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    greetingsFactory.selectGreeting('sotho', 'Andrew');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    assert.deepEqual(greetingsFactory.countUsers(), 2);
  })
  it("should be able to empty abject ", function() {
    let greetingsFactory = GreetingsLogic(); //Instance
    greetingsFactory.selectGreeting('sotho', 'Andrew');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    greetingsFactory.selectGreeting('english', 'Tshepo');
    assert.deepEqual(greetingsFactory.reset(), {});
  })
  it("object should take in the input parameter from the factory function", function() {
    let greetingsFactory = GreetingsLogic({
      Andrew: 0,
      Tshepo: 0
    }); //Instance
    assert.deepEqual(greetingsFactory.map(), {
      Andrew: 0,
      Tshepo: 0
    });
  })
});
