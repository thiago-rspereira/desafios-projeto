// Variáveis para armazenar  quantidade e XP-do Héroi
let nomeDoHeroi = "Luminarion ";
let xpDoHeroi = "7550 ";

// Utilizando uma estrutura de decisão para classificar
let nivelHeroi;


switch (true) {
    case xpDoHeroi < 1000:
        nivelHeroi = "Ferro";
        break;
    case xpDoHeroi <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xpDoHeroi <= 5000:
        nivelHeroi = "Prata";
        break;
    case xpDoHeroi <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xpDoHeroi <= 8000:
        nivelHeroi = "Platina";
        break;
    case xpDoHeroi <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xpDoHeroi <= 10000:
        nivelHeroi = "Imortal";
        break;
    default:
        nivelHeroi = "Radiante";
}
// Exibindo a mensagem com o nome e o nível do herói
console.log ("O Héroi " + nomeDoHeroi + xpDoHeroi + nivelHeroi);