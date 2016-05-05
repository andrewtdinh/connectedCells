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
  var arrLen = arr.length;
  while(arr.length > 2){
    var testItem = arr.shift();
    console.log('testItem: ' +testItem+ "---> arr: " +arr);
    if (findPairs(arr, target - testItem).length > 0){
      console.log('found one trio');
    }
  }
}

findThrees(testData, targetNum);
// console.log(findPairs(testData, targetNum));
