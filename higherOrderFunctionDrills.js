function max(numbers) {
    console.log(numbers)
    let myMax = numbers[0];  
    let i=0;
    while ( i < numbers.length) {
      if (numbers[i] > myMax) {
        myMax = numbers[i];
      }
      i++;
    }
    return myMax;
  }
  
  function min(numbers) {
    let myMin = numbers[0];
    let j=0;
    while ( j < numbers.length) {
      if (numbers[j] < myMin) {
        myMin = numbers[j];
      }
      j++;
    }
    return myMin;
  }

  