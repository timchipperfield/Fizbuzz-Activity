describe("Fizzbuzz", function() {
  var fizzBuzz;

  beforeEach(function() {

    fizzBuzz = new FizzBuzz();
  });

  describe('multipes of 3', function() {

    it('fizzes for 3', function() {
      expext(fizzBuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function() {
      expect(fizzBuzz.play(6)).toEqual('fizz');
    });

  });

  describe('multiples of 5', function() {

    it('buzzes for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });


    it('buzzes for 25', function() {
      expect(fizzBuzz.play(25)).toEqual('buzz');
    });
  });

  describe('multiples of 5 and 3', function() {

    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });

    it('fizzbuzzes for 30', function() {
      expect(fizzBuzz.play(30)).toEqual('fizzbuzz');
    });

  });

  describe('all other numbers', function() {

    it('1 for 1', function() {
      expect(fizzBuzz.play(1).toEqual(1);
    });

    it('11 for 11', function() {
      expect(fizzBuzz.play(11)).toEqual(11);
    });
  });
});


