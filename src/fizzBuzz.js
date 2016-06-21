var FizzBuzz = function() {
};

FizzBuzz.prototype = {
  play: function(number) {
    if(number % 15 === 0) {
      return this.play = 'FizzBuzz'
    };
    if(number % 5 === 0) {
      return this.play = 'Buzz';
    };
    if(number % 3 === 0) {
      return this.play = 'Fizz';
    };
    return this.play = number;
  }
};
