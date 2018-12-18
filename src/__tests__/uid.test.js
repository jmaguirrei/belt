
import assert from 'assert';
import { uid } from '../uid';

export default {

  ['Generates by default a 22 length random char']() {
    assert.equal(
      uid().length,
      22
    );
  },

  ['Left side first 13 chars are a String convertible to number (timestamp)']() {
    const leftSide = uid().substr(0, 13);
    assert.equal(
      leftSide,
      String(Number(leftSide))
    );
  },

  ['Right side has the lenght provided']() {
    const rightSide = uid(7).substr(14, 1000);
    assert.equal(
      rightSide.length,
      7
    );
  },

  ['A - just as a separator']() {
    const separator = uid(7).substr(13, 1);
    assert.equal(
      separator,
      '-'
    );
  },


};

