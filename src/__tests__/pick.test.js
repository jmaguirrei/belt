
import assert from 'assert';
import { pick } from '../pick';

export default {

  ['Returns new object like the original including (existent) keys']() {
    assert.deepEqual(
      pick({ a: 1, b: 2, c: 3 }, [ 'a', 'd' ]),
      //
      { a: 1 }
    );
  },


};
