//Encontrar e guardar a galinha

let bichos = ["π","π","π·","π"];
let galinha = bichos.find(n => n == "π");
console.log(galinha);
//Onde estΓ‘ posicionada a galinha
let galinhaPosition = bichos.findIndex(n => n == "π");
console.log(`A π se econtra na posiΓ§Γ£o ${galinhaPosition} do seu array`);