
import assert from 'assert';
import { get } from '../get';

export default {

  ['Gets and element by its key (single key)']() {
    assert.equal(
      get({
        a1: 'a1',
        a2: 'a2',
        a3: 'a3',
      }, 'a2'),
      'a2',
    );
  },

  ['Gets and element by its key (deeply nested key)']() {
    assert.equal(
      get({
        a1: 'a1',
        a2: {
          a21: {
            a211: 'a211',
          },
          a22: 'a22',
        },
        a3: 'a3',
      }, 'a2.a21.a211'),
      'a211',
    );
  },

  ['Defaults when no coincidence is found']() {
    assert.equal(
      get({
        a1: 'a1',
        a2: {
          a21: {
            a211: 'a211',
          },
          a22: 'a22',
        },
        a3: 'a3',
      }, 'a2.a21.a2X11', 'I am default'),
      'I am default',
    );
  },

  ['Works with numeric keys']() {
    assert.equal(
      get({
        0: 'false-0',
        1: 'true-1',
        2: 'false-2',
      }, 1),
      'true-1',
    );
  },

  ['Works with undefined object']() {
    assert.equal(
      get(undefined, 1, 'defaulty'),
      'defaulty',
    );
  },


  ['Works with empty object']() {
    assert.equal(
      get({}, 1, 'defaulty'),
      'defaulty',
    );
  },

};

