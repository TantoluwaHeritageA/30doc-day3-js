const check = (arr) => {
    const newArr = arr.map((val) => {
      let second = []
      for (let i = 1; i <= val; i++) {
        if (i % 15 === 0) {
          second.push("FizzBuzz")
        } else if (i % 5 === 0) {
          second.push("Buzz")
        } else if (i % 3 === 0) {
          second.push("Fizz")
        } else {
          second.push(i)
        }
      }
      return second;
    })
    console.log(newArr)
  }
  check([4, 10, 6])