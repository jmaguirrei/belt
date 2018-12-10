
import assert from 'assert';
import { random } from '../random';

export default {

  ['Gets a random number between 1 and 5, so its 1, 2, 3, 4 or 5']() {
    const randomNum = random(1, 5);
    assert.equal(
      randomNum >= 1 && randomNum <= 5,
      true,
    );
  },

  ['Gets a random number betrween 1 and 1, so its 1']() {
    const randomNum = random(1, 1);
    assert.equal(
      randomNum,
      1,
    );
  },


};
