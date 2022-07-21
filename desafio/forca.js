class Forca {
  chutar(letra) {
    if (letra.length() == 1) {
      for (let i = 0; i < this.palavraSecreta.length; i++)
        if (this.palavraSecreta[i] == letra) {
          letrasChutadas.push(letra);
          palavra[i] == letra;
        } else {
          letrasChutadas.push(letra);
          vidas--;
        }
    }
  }

  buscarEstado() {
    if (this.buscarDadosDoJogo().vidas == 0) {
      return "perdeu";
    }
    let letrasCertas = 0;
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] == palavra[i]) {
        letrasCertas++;
      }
    }
    if (letrasCertas == this.palavraSecreta.length) {
      return "ganhou";
    }
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: [], // Deve conter todas as letras chutadas
      vidas: 6, // Quantidade de vidas restantes
      palavra: [], // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavraSecreta.forEach((element) => {
      palavra.push("_");
    });
  }

  exports = Forca;
}
