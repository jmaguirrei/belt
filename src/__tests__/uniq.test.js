
import assert from 'assert';
import { uniq } from '../uniq';

export default {

  ['Reduce a simple array of numbers to unique elements, preserves order']() {
    assert.deepEqual(
      uniq([ 3, 4, 3, 1, 2, 3 ]),
      [ 3, 4, 1, 2 ],
    );
  },

  ['Does not work when the array contains objects (returns same array)']() {
    const array = [ { a: 3 }, { a: 4 }, { a: 3 }, { a: 1 }, { a: 2 }, { a: 3 } ];
    assert.deepEqual(
      uniq(array),
      array
    );
  },

};

