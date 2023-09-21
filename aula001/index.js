class pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(frase) {
        console.log(this.nome + ' disse: ' + frase);
    }
 }

 let pl = new pessoa('Francisco');

  pl.falar('Oi, tudo  bem ?');
  pl.falar('como vai ');
