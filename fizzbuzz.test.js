require('./fizzbuzz')

describe('FizzBuzz Testing', () => {
  it('Returns "Fizz" at 3rd index of array with input of 3', () => {
    expect(fizzbuzzCalculator(3)).toEqual([1, 2, "Fizz"])
  })

  it('Returns "Fizz" at 3rd index and also returns up to 4 in array when input is 4', () => {
    expect(fizzbuzzCalculator(4)).toEqual([1, 2, "Fizz", 4])
  })

  it('Returns "Fizz at 3rd index and "Buzz" at 5th index when input is 5', () => {
    expect(fizzbuzzCalculator(5)).toEqual([1, 2, "Fizz", 4, "Buzz"])
  })
})