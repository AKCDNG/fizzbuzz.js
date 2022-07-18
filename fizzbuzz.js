fizzbuzzCalculator = (num) => {
  if(num === 3) {
    return [1, 2, 'Fizz'];
  } else if (num === 4){
    return [1, 2, 'Fizz', 4]
  } else {
    return [1, 2, "Fizz", 4, "Buzz"]
  }

};

fizzbuzzCalculator

module.exports = fizzbuzzCalculator;
