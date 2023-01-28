//Encontrar e guardar a galinha

let bichos = ["🐔","🐒","🐷","🐞"];
let galinha = bichos.find(n => n == "🐔");
console.log(galinha);
//Onde está posicionada a galinha
let galinhaPosition = bichos.findIndex(n => n == "🐔");
console.log(`A 🐔 se econtra na posição ${galinhaPosition} do seu array`);