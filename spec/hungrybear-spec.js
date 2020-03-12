beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
  });

  afterEach(function () {
    jest.clearAllTimers();
});
