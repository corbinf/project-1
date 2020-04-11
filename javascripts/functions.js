// jshint esversion: 7

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  let average = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
};

//Req. 3c
let arrMax = (arr) => {
  //
};

/*let fruits = ["Apple", "Oranges", "Plum"];
let maxSoFar = fruits[0].length;

//iterate over array ay
fruits.forEach((elem) => {
  if(elem.length > maxSoFar){
  maxSoFar = elem.length
  }
});

console.log(maxSoFar);*/
