
class Heroi {

constructor(nome, vida, velocidade, forca){
this.nome = nome;
this.vida = vida;
this.velocidade = velocidade;
this.forca = forca;


}
    correr(){
        return "Correndo!" 
    }
    andar(){
        return "Andando!" 
    }
    atacar(){
        return "Atacando!" 
    }
    defender(){
        return "Defendendo!" 
    }
    
}

const homemAranha = new Heroi("Pietro Parque", "28", "12", "201401240102020");
homemAranha.teia = (function(teia){;
if (teia == 1) {
        document.write("Vai teia!");
    } else {
        document.write("Preciso fazer mais teia...");;
    }
})(0);

homemAranha.sentidoAranha = (function(sentidoAranha){
    if (sentidoAranha == 1) {
        document.write("<p>~~~~!!!!</p>");
    }
})(1)

const superMan = new Heroi("Crack Quente", "50000000", "1210000", "20140102020");
superMan.podeVoar = (function(podeVoar){;
if (podeVoar == 1) {
        document.write("<p>Posso Voar!</p>");
    } else {
        document.write("A criptonita tirou meus poderes de vôo...");;
    }
})(1);

homemAranha.visaoCalor = (function(visaoCalor){
    if (visaoCalor == 1) {
        document.write("<p>Usando visão de calor!</p>");
    }
})(1)

const batMan = new Heroi("Bruno Wainei", "40000", "90000", "20");
batMan.esconder = (function(esconder){;
if (esconder == 1) {
        document.write("<p>Estou escondido...</p>");
    } else {
        document.write("Me avistaram!");
    }
})(1);

batMan.investigar = (function(investigar){
    if (investigar == 1) {
        document.write("<p>Investigando...</p>");
    }
})(1)

document.write(`${batMan.nome} esta ${batMan.correr()}`)
document.write(`<p>${homemAranha.nome} esta ${batMan.andar()}</p>`)

