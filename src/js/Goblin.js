export default class Goblin {
  constructor() {
    this.char = undefined;
  }

  creatChar() {
    const char = document.createElement('img');
    char.classList.add('goblin');
    char.src = 'img/goblin.png';
    this.char = char;
  }

  getChar() {
    this.creatChar();
    return this.char;
  }
}
