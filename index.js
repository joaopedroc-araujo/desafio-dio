// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

const readlineSync = require("readline-sync");

let playerName = readlineSync.question("Entre o nome do jogador: ");
let playerLevel;

while (true) {
  let input = readlineSync.question("Entre o level do jogador: ");
  playerLevel = Number(input);

  if (!isNaN(playerLevel)) {
    break;
  }

  console.log("Erro: O nível precisa ser um número válido! Tente novamente.");
}

let playerRanking;

switch (true) {
  case playerLevel < 1000:
    playerRanking = "Ferro";
    break;

  case playerLevel <= 2000:
    playerRanking = "Bronze";
    break;

  case playerLevel <= 5000:
    playerRanking = "Prata";
    break;

  case playerLevel <= 7000:
    playerRanking = "Ouro";
    break;

  case playerLevel <= 8000:
    playerRanking = "Platina";
    break;

  case playerLevel <= 9000:
    playerRanking = "Ascendente";
    break;

  case playerLevel <= 10000:
    playerRanking = "Imortal";
    break;

  default:
    playerRanking = "Radiante";
    break;
}

console.log(
  `O Herói de nome ${playerName.replace(/^./, (char) =>
    char.toUpperCase()
  )} está no nível de ${playerRanking}`
);
