'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 42;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var checkedNumbers = {};

      arr.forEach(function(number, index){
        var complement = target - number;
        if (checkedNumbers.hasOwnProperty(complement)){
          var pair = {};
          pair[number] = index;
          pair[complement] = checkedNumbers[complement];
          qualifiedPairs.push(pair);
        }
        else {checkedNumbers[number] = index;}
      });

      return qualifiedPairs;
    }

var findThrees = function(arr, target){
  var pointer = 0;
  while(pointer < arr.length){
    var testItem = arr[pointer];
    var subArray = arr.slice();
    subArray.splice(pointer, 1);
    // console.log('testItm: ' +testItem+ "---> arr: " +subArray);
    var pairsFound = findPairs(subArray, target - testItem);
    if (pairsFound.length > 0){
      pairsFound.forEach(function(pair){
        pair[testItem] = pointer;
        console.log(pair);
      });
      //console.log('Pairs found:  ' +pairsFound);
    }
    ++pointer;
  }
}

findThrees(testData, targetNum);
// console.log(findPairs(testData, targetNum));
