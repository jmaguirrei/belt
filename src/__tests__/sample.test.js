
import assert from 'assert';
import { sample } from '../sample';

export default {

  ['Gets a single element that is in the array']() {
    const array = [ { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 } ];
    const sampleArray = sample(array);
    assert.equal(
      array.indexOf(sampleArray) >= 0,
      true,
    );
  },


  ['An empty array has a null sample']() {
    const array = [];
    const sampleArray = sample(array);
    assert.ok(
      array.indexOf(sampleArray),
      false,
    );
  },


};

