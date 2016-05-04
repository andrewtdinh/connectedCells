'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 42;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var checkedNumbers = {};

      arr.forEach(function(number){
        var complement = target - number;
        if (checkedNumbers[complement]){qualifiedPairs.push([number, complement]);}
        else {checkedNumbers[number] = true;}
      });

      return qualifiedPairs;
    }
var findThrees = function(arr, target){
  for(var i=0; i < arr.length; i++){
    if (findPairs(arr.splice(i, 1), (target - arr[i]))){
      console.log('found')
    }
  }
}

findThrees(testData, targetNum);
// console.log(findPairs(testData, targetNum));
