describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('when multiples 3 and 5', function() {
    it('displays FizBuzz', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    });

  it('displays FizBuzz', function() {
      expect(fizzBuzz.play(30)).toEqual('FizzBuzz');
    });
  });

  describe('when multiple of 5', function() {
    it('displays Buzz', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    });

    it('displays Buzz', function() {
      expect(fizzBuzz.play(25)).toEqual('Buzz');
    });
  });

  describe('when multiple of 3', function() {
    it('displays Fizz', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    });

    it('displays Fizz', function() {
      expect(fizzBuzz.play(9)).toEqual('Fizz');
    });
  });

  describe('when any other number', function() {
    it('displays the number itself', function() {
      expect(fizzBuzz.play(1)).toEqual(1);
    });
    it('displays the number itself', function() {
      expect(fizzBuzz.play(7)).toEqual(7);
    });
  });
});
