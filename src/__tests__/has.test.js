
import assert from 'assert';
import { has } from '../has';

export default {

  ['Simple existing key']() {
    assert.equal(
      has({
        a1: 'a1',
        a2: 'a2',
        a3: 'a3',
      }, 'a2'),
      true,
    );
  },

  ['Simple non-existing key']() {
    assert.equal(
      has({
        a1: 'a1',
        a2: 'a2',
        a3: 'a3',
      }, 'xx'),
      false,
    );
  },

  ['Has deeply nested key']() {
    assert.equal(
      has({
        a1: 'a1',
        a2: {
          a21: {
            a211: 'a211',
          },
          a22: 'a22',
        },
        a3: 'a3',
      }, 'a2.a21.a211'),
      true,
    );
  },

  ['Works also with arrays, even if value is null']() {
    assert.equal(
      has({
        a1: 'a1',
        a2: {
          a21: {
            a211: [ { x: null } ],
          },
          a22: 'a22',
        },
        a3: 'a3',
      }, 'a2.a21.a211.0.x'),
      true,
    );
  },

  ['Does not have a deeply nested key (no error thrown of course)']() {
    assert.equal(
      has({
        a1: 'a1',
        a2: {
          a21: {
            a211: 'a211',
          },
          a22: 'a22',
        },
        a3: 'a3',
      }, 'a2.a21.x.y.z.0.d'),
      false,
    );
  },

};

