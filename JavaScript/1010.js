var input = require('fs').readFileSync('stdin', 'utf8')
var linhas = input.split('\n')
var Item1 = linhas.shift().split(' ')
var Item2 = linhas.shift().split(' ')

var idItem1 = Item1.shift()
var qtdItem1 = Item1.shift()
var valorUnitarioItem1 = Item1.shift()
var valorTotalItem1 = qtdItem1 * valorUnitarioItem1

var idItem2 = Item2.shift()
var qtdItem2 = Item2.shift()
var valorUnitarioItem2 = Item2.shift()
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2

var valorTotal = valorTotalItem1 + valorTotalItem2

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);