function max(numbers) {
    console.log(numbers)
    let myMax = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > myMax) {
        myMax = numbers[i];
      }
    }
    return myMax;
  }
  
  function min(numbers) {
    let myMin = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < myMin) {
        myMin = numbers[i];
      }
    }
    return myMin;
  }

  