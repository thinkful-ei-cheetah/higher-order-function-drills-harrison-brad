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
function hello(){
    return console.log('Hello World');
}
function goodbye(){
    return console.log('Goodbye world');
}
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

  