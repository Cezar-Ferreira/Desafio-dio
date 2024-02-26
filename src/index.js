let nomeHeroi = "Goku"
let XP = 7000
let nivel;

switch (true) {
case XP <  1000 :
    Nivel = "Ferro";
    break;
    case XP >= 1001 && XP <= 2000 :
        nivel = "Bronze";
        break;
        case XP >= 2001 && XP <= 5000 :
            nivel = "Prata";
            break;
            case  XP>= 5001 && XP <= 7000 :
                nivel = "OURO";
                break;
                case XP >= 7001 && XP <= 8000 :
                     nivel = "Platina Diamante";
                    break;
                    case XP >= 8001 && XP <= 9000 :
                        nivel = "Ascendete";
                        break;
                        case XP >= 9001 && XP <= 10000 :
                            nivel = "Imortal";
                            break;
                            case XP >= 10001 :
                                nivel = "Radiante";
                                break;
                                default:
                                    console.log("XP invalido")
}
console.log("O herói de nome "  +  nomeHeroi  +  "está no nível " + nivel);
