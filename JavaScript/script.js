// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')
// Codigo abaixo
var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var SOMA = A + B


console.log('SOMA = ' + SOMA);
