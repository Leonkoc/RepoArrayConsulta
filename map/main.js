//Transforma cada número multiplicando por 2! [1,2,3];
let numeros = [1,2,3].map(n => n * 2);
console.log(numeros)
/*
Oq aconteceu aqui? Aplicamos .map em um array, o método .map é usando para aplicar uma função em um array,
nesse caso fizemos a arrow function "n = n * 2", Nesse caso o n é uma convenção, poderia ser substituida por 
qualquer coisa
*/