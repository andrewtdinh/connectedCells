'use strict'

var testData  = [3, 8, 12, 13, 21, 22, 27, 40, 47, 64, 95];
var targetNum = 30;
var findPairs = function(arr, target) {
      var qualifiedPairs = [];
      var arrLen = arr.length;
      var leftPointer = 0;
      var rightPointer = arrLen - 1;

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
