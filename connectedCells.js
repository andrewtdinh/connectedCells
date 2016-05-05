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
  for(var i=0; i < rows.length; i++){
    var cells = rows[i].split(' ');
    for(var j=0; j < cells.length; j++){
      matrix['' + j + i] = {value: cells[j], counted: false};
      uncheckedCells.push('' + j + i);
    }
  }
  function findUncountedFilledNeighbors(cellLoc){
    var qualifiedCells = [];
    var leftBound = cellLoc[0] - 1 >= 0 ? cellLoc[0] - 1 : cellLoc[0];
    var rightBound = cellLoc[0] + 1 < c ? cellLoc[0] + 1 : cellLoc[0];
    var leftBound = cellLoc[1] - 1 >= 0 ? cellLoc[1] - 1 : cellLoc[1];
    var rightBound = cellLoc[1] + 1 < r ? cellLoc[1] + 1 : cellLoc[1];

  }
  function expand(cellLoc){
    var currentMax = 0;
    if (matrix[cellLoc].value )
  }

  //Pass in an array of unchecked cells.  It just walk through the array one at a time.
  function countIt(arr)
  console.log(matrix);
  console.log('uncheckedCells: ' + uncheckedCells);
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
