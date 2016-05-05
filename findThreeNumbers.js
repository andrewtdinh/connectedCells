'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 42;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var checkedNumbers = {};

      arr.forEach(function(number){
        var complement = target - number;
        if (checkedNumbers.hasOwnProperty(complement)){
          qualifiedPairs.push([number, complement]);
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
    var pairsFound = findPairs(subArray, target - testItem);
    if (pairsFound.length > 0){
      pairsFound.forEach(function(pair){
        pair.push(testItem);
        console.log(pair);
      });
    }
    ++pointer;

  }
}

findThrees(testData, targetNum);
