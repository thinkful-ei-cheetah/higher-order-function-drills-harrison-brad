//Redone Min/Max using while loops instead of for loops

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
  function repeat(fn,n){
    for (let i=0;i<n;i++){
        fn();
    }
}

//Exercise 1

function hello(){
    return console.log('Hello World');
}
function goodbye(){
    return console.log('Goodbye world');
}

// Exercise 2
function filter(names,fn) {
    // TASK: Define your function here
    out=[];
    for (i=0;i< names.length;i++){
        if (fn(names[i])){
            out.push(names[i]);
        }
    }
    return out;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Exercise 3. 
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    let time = '';
    return function (location) {
        warningCounter ++;
        if (warningCounter > 1) {
            time = 's';
        } 
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time`+time+` today!`);
    }
    }

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('somewhere');
rocksWarning('somewhere nearby');
rocksWarning('somewhere else');



// Exercise 4
let turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleMovement.filter(function(steps){
    if (steps[0] < 0){
        return false;
    } else if (steps[1] < 0) {
        return false;
    } else {
        return true;
    }
})

turtleMovement.map(function(allSteps){
    return allSteps[0] + allSteps[1];
})

turtleMovement.forEach(function(turtleSteps){
    return console.log (turtleSteps[0] + turtleSteps[1]);
})



let a = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
let newArray = a.split(" ")


// 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'