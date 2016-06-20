describe('FizzBuzz', function(){

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });
  describe('mutiples of 3', function() {
    it('returns fizz', function() {
      expect(fizzBuzz.play(3)).toEqual('fizz');
    });
  });

  describe('multiples of 5', function() {
    it('returns buzz', function() {
      expect(fizzBuzz.play(5)).toEqual('buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('returns fizzbuzz', function() {
      expect(fizzBuzz.play(15)).toEqual('fizzbuzz');
    });
  });

  describe('all other numbers', function() {
    it('returns the number', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
  });
});
