const FizzBuzz = require('./FizzBuzz');

test('ถ้าใส่ 3 จะเท่ากับ Fizz', () => {
expect(FizzBuzz(3)).toBe("Fizz");
})

test('ถ้าใส่ 15 จะเท่ากับ FizzBuzz', () => {
    expect(FizzBuzz(15)).toBe("FizzBuzz")
})

test('ถ้าใส่ 5 จะเท่ากับ Buzz' , () => {
    expect(FizzBuzz(5)).toBe("Buzz")
})

test ('ถ้าใส่ 1 จะเท่ากับ 1' , () => {
    expect(FizzBuzz(1)).toBe(1)
})

test ('ถ้าใส่ 100 จะเท่ากับ Buzz' , () => {
    expect(FizzBuzz(100)).toBe("Buzz")
})

test ('ถ้าใส่ 30 จะเท่ากับ FizzBuzz' , () => {
    expect(FizzBuzz(30)).toBe("FizzBuzz")
})

test ('ถ้าใส่ 98 จะเท่ากับ 98' , () => {
    expect(FizzBuzz(98)).toBe(98)
})
