//Encontre e devolva a galinha
quemVeioPrimeiro = ["🍳","🥚","🐣","🐔"];
let encontrar = quemVeioPrimeiro.find(n => n == "🐔");
//Onde está a galinha
let ondeEsta = quemVeioPrimeiro.findIndex(n => n == "🐔");
console.log(`Encontrei a galinha aqui está ${encontrar} e está posicionada no index ${ondeEsta}`);