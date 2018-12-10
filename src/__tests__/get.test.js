
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

};

