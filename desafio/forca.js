class Forca {
  letraChutadaRepetida(letra) {
    for (let i = 0; i < this.letrasChutadas.length; i++) {
      if (letra == this.letrasChutadas[i]) {
        return true;
      }
    }
    return false;
  }

  chutar(letra) {
    if (letra.length == 1) {
      if (!this.letraChutadaRepetida(letra)) {
        this.letrasChutadas.push(letra);
        // O loop checa se a letra chutada é igual a algum caractere da palavraSecreta, e se sim,
        // ele troca o espaço "_" da array palavra pela letra, e chuteCerto se torna verdadeiro
        let chuteCerto = false;
        for (let i = 0; i <= this.palavraSecreta.length; i++) {
          if (this.palavraSecreta[i] == letra) {
            this.palavra[i] = letra;
            chuteCerto = true;
          }
        }
        if (!chuteCerto) {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas <= 0) {
      return "perdeu";
    }
    // O loop adiciona 1 para cada letra igual que estiver presente em ambas as variáveis
    // palavraSecreta e palavra, e se a quantidade de letrasCertas for igual ao tamanho da
    // palavraSecreta (ou seja, se a palavraSecreta e palavra forem iguais), o método retorna ao
    // usuário que ele ganhou
    let letrasCertas = 0;
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] == this.palavra[i]) {
        letrasCertas++;
      }
    }
    if (letrasCertas == this.palavraSecreta.length) {
      return "ganhou";
    }
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
    // Para cada caractere da palavraSecreta, é adicionado um "_" na array palavra
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavra[i] == undefined) {
        this.palavra[i] = "_";
      }
    }
    return [this.letrasChutadas, this.vidas, this.palavra];
  }

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.letrasChutadas = [];
    this.palavra = [];
    this.vidas = 6;
  }
}

module.exports = Forca;
