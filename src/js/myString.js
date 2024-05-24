


export class MyString {
  constructor(str) {
    this.str = str;
  }

  remove(index) {
    if (index < 0 || index >= this.str.length) {
      return this.str;
    }
    return this.str.slice(0, index) + this.str.slice(index + 1);
  }

  insert(index, sign) {
    if (index < 0) {
      return sign + this.str;
    } else if (index >= this.str.length) {
      return this.str + sign;
    } else {
      return this.str.slice(0, index) + sign + this.str.slice(index);
    }
  }

  trimSign() {
    return this.str.replace(/(.)\1+/g, "$1");
  }

  toggle() {
    return this.str
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
  }

  counter(sign) {
    return this.str.split(sign).length - 1;
  }
}
