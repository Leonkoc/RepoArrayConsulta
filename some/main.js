//existe algum erro?
let cancelaEla = ["✔️","✔️","❌","✔️"];
let existe = cancelaEla.some(n => n== "❌");

if(existe == true){
    let existePosicao = cancelaEla.findIndex(n => n == "❌");
    console.log(`Existe um ❌, na posição ${existePosicao}`);
}