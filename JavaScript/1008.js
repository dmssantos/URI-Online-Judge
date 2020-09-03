var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

var numero = parseInt(lines.shift())
var horasTrabalhadas = parseInt(lines.shift())
var valorPorHora = parseFloat(lines.shift())

var SALARIO = horasTrabalhadas * valorPorHora

console.log(`NUMBER = ${numero}\nSALARY = U$ ${SALARIO.toFixed(2)}`);