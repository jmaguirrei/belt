
import assert from 'assert';
import { omit } from '../omit';

export default {

  ['Returns new object like the original except excluded (existent) keys']() {
    assert.deepEqual(
      omit({ a: 1, b: 2, c: 3 }, [ 'c', 'd' ]),
      //
      { a: 1, b: 2 }
    );
  },


};
