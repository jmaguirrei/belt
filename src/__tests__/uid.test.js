
import assert from 'assert';
import { uid } from '../uid';

export default {

  ['Generates by default a 21 length random char']() {
    assert.equal(
      uid().length,
      21
    );
  },

  ['Left side chars are a String convertible to number (timestamp)']() {
    const leftSide = uid().substr(0, 7);
    assert.equal(
      leftSide,
      String(Number(leftSide))
    );
  },

};

