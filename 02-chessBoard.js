'use strict';
var size = 8;
var board = '';

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
    	board += ((x + y) % 2 == 0)? ' ': '#';
    }
    board += "\n";
}

console.log(board);