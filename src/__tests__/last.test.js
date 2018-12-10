
import assert from 'assert';
import { last } from '../last';

export default {

  ['Gets last item of the array']() {
    assert.equal(
      last([ 3, 4, 5, 6 ]),
      6
    );
  },

  ['If array is empty, returns null']() {
    assert.equal(
      last([]),
      null
    );
  },

};
