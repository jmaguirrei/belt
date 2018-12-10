
import assert from 'assert';
import { compact } from '../compact';

export default {

  ['Returns same array but filtered (only truthy values)']() {
    const array = [ { n: 1 }, undefined, { n: 2 }, false, '', 0, { n: 3 }, { n: 4 } ];
    const compacted = [ { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 } ];
    assert.deepEqual(
      compact(array),
      compacted,
    );
  },

  ['Returns same array when all values are truthy']() {
    const array = [ { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 } ];
    const compacted = [ { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 } ];
    assert.deepEqual(
      compact(array),
      compacted,
    );
  },


};

