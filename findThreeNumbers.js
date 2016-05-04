'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 30;
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

console.log(findPairs(testData, targetNum));
