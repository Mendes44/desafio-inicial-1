let nomeHeroi = "Personagem";
let xpDoHeroi = 7500;
let nivelDoHeroi;

switch (true){
    case  xpDoHeroi <= 1000:
        nivelDoHeroi = "ferro"
        break;
    case  xpDoHeroi <= 1001 && xpDoHeroi <= 2000:
            nivelDoHeroi = "bronze"
            break;
    case  xpDoHeroi <= 2001 && xpDoHeroi <= 5000:
            nivelDoHeroi = "prata"
            break;
    case  xpDoHeroi <= 5001 && xpDoHeroi <= 7000:
                nivelDoHeroi = "ouro"
                break;
    case  xpDoHeroi <= 7001 && xpDoHeroi <= 8000:
                nivelDoHeroi = "Platina Diamante"
                break;
    case  xpDoHeroi <= 8001 && xpDoHeroi <= 9000:
                nivelDoHeroi ="Ascedente"
                break;
    case  xpDoHeroi <= 9001 && xpDoHeroi <= 10000:
                nivelDoHeroi = "Imortal"
                break;
    default:
            console.log("Radiante")
            break;
}

console.log(nomeHeroi + " possui " + xpDoHeroi + " de XP e do nivel " + nivelDoHeroi)
