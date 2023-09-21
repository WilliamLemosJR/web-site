class pessoa {
    constructor(nome){
        this.nome = nome;
    }

    falar(frase) {
        console.log(this.nome + ' disse: ' + frase);
    }
 }

class aluno extends pessoa {
    estudar(disciplina){
        console.log(this.nome + ' estuda: ' + disciplina);
    }
}

class professor extends pessoa {
    ensinar(disciplina){
        console.log(this.nome + ' ensina: ' + disciplina);
    }
}

 let pl = new professor('Francisco');

  pl.falar('Oi, tudo  bem ?');
  pl.falar('como vai ');
  pl.ensinar('Biologia')
