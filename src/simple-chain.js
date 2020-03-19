const chainMaker = {
  arrChain: [],

  getLength() {
    // throw 'Not implemented';
    this.arrChain.length;
    return this;
  },
  addLink(value) {
    value = '( ' + value + ' )'
    this.arrChain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof(position) !== 'number' || position < 1 || this.arrChain.length < position) {
      this.arrChain = [];
      throw new Error('removing wrong link');
    }
    this.arrChain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    str = this.arrChain.join('~~');
    this.arrChain = [];
    return str;
  }
};

module.exports = chainMaker;
