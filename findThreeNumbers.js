'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 42;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var checkedNumbers = {};

      arr.forEach(function(number, index){
        var complement = target - number;
        if (checkedNumbers.hasOwnProperty(complement)){
          qualifiedPairs.push([number, complement]);
        }
        else {checkedNumbers[number] = index;}
      });

      return qualifiedPairs;
    }

var findThrees = function(arr, target){
  var qualifiedTriples = [];
  for(var i=0; i < arr.length - 2; i++){
    var subArray = arr.slice(i + 1);
    var pairsFound = findPairs(subArray, target - arr[i]);
    if (pairsFound.length > 0){
      pairsFound.forEach(function(pair){
        pair.push(arr[i]);
        qualifiedTriples.push(pair);
      });
    }
  }
  return qualifiedTriples;
}

console.log(findThrees(testData, targetNum));
