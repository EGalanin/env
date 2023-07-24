export default class Goblin {
  constructor() {
    this.char = undefined;
  }

  creatChar() {
    const char = document.createElement('div');
    char.classList.add('goblin');
    this.char = char;
  }

  getChar() {
    this.creatChar();
    return this.char;
  }
}
