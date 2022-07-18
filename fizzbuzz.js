fizzbuzzCalculator = (num) => {
  const finalFizzbuzz = []
  for (let i = 1; i <= num; i++) {
    if(i % 3 === 0) {
      finalFizzbuzz.push("Fizz")
    } else if(i % 5 === 0) {
      finalFizzbuzz.push("Buzz")
    } else {
      finalFizzbuzz.push(i)
    }
  } 

  return finalFizzbuzz
};

module.exports = fizzbuzzCalculator;
