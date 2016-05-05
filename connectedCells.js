'use strict'

var data = "5\n\
5\n\
0 1 0 1 1\n\
1 1 0 1 0\n\
0 1 0 0 1\n\
0 0 0 0 1\n\
1 1 0 1 0";

function processData(input) {
  var rows = input.split('\n'),
  r = rows.shift() * 1,
  c = rows.shift() * 1,
  matrix = {},
  uncheckedCells = [];
  //Generating the matrix object
  for (var i=0; i < rows.length; i++){
    var cells = rows[i].split(' ');
    for (var j=0; j < cells.length; j++){
      matrix['' + j + i] = {value: cells[j], unCounted: true};
      uncheckedCells.push('' + j + i);
    }
  }
  function findUncountedFilledNeighbors(cellLoc){
    var qualifiedCells = [];
    var x = cellLoc[0] * 1, y = cellLoc[1] * 1;
    var leftBound = x - 1 >= 0 ? x - 1 : x;
    var rightBound = x + 1 < c ? x + 1 : x;
    var upBound = y - 1 >= 0 ? y - 1 : y;
    var downBound = y + 1 < r ? y + 1 : y;
    console.log('c: ' + c)
    console.log('cellLoc[0]: ' + cellLoc[0]);
    console.log('lb, rb: ' +leftBound+ ', ' +rightBound);
    console.log('ub, db: ' +upBound+ ', ' +downBound);
    for (var i=upBound; i<=downBound; i++){
      for (var j=leftBound; j<=rightBound; j++){
        var xy = '' + j + i;
        if (matrix[xy] !== cellLoc && matrix[xy].value === 1 && matrix[xy].unCounted){qualifiedCells.push[xy];}
      }
    }
    return qualifiedCells;
  }
  // function expand(cellLoc){
  //   var currentMax = 0;
  //   if (matrix[cellLoc].value )
  // }

  //Pass in an array of unchecked cells.  It just walk through the array one at a time.
  // function countIt(arr)
  console.log(matrix);
  console.log('uncheckedCells: ' + uncheckedCells);
  console.log(findUncountedFilledNeighbors('11'));
}

processData(data);

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
