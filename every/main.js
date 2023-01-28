//Está tudo ok?
let situacao = ["👍🏼","👎🏼","👍🏼","👍🏼"];
let tudoEstaOk = situacao.every(n => n == "👍🏼");
if(tudoEstaOk == false){
    console.log("Nem tudo está bem :( ");
    let encontrando = situacao.findIndex(n => n == "👎🏼");
    console.log(`Na posição ${encontrando} algo está mal!`)
}
