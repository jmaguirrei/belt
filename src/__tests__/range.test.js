
import assert from 'assert';
import { range } from '../range';

export default {

  ['Gives the correct range between low and (not inluded) high number']() {
    assert.deepEqual(range(3, 7), [ 3, 4, 5, 6 ]);
  },

  ['Returns empty array when high is lower than low']() {
    assert.deepEqual(range(7, 3), []);
  },

  ['Returns an array starting at 0 when a single parameter is provided']() {
    assert.deepEqual(range(7), [ 0, 1, 2, 3, 4, 5, 6 ]);
  },

};
