'use strict'

var testData  = [64, 22, 8, 12, 27, 13, 21, 40, 47, 95, 3];
var targetNum = 30;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var leftPointer = 0, rightPointer = arr.length - 1;

      while (leftPointer < rightPointer){
        var pairSum = arr[leftPointer] + arr[rightPointer];

        if (pairSum === target) {
          qualifiedPairs.push([arr[leftPointer], arr[rightPointer]]);
          leftPointer++;
          rightPointer--;
        }
        else if (pairSum < target) {leftPointer++;}
        else {rightPointer--;}
      }

      return qualifiedPairs;
    }

console.log(findPairs(testData, targetNum));
