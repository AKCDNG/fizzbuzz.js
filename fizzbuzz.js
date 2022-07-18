fizzbuzzCalculator = (num) => {
  const finalFizzbuzz = []
  for (let i = 1; i <= num; i++) {
    if(i % 3 === 0) {
      finalFizzbuzz.push("Fizz")
    } else {
      finalFizzbuzz.push(i)
    }
  } 

  return finalFizzbuzz
};

module.exports = fizzbuzzCalculator;
