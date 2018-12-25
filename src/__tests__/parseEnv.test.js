
import assert from 'assert';
import { parseEnv } from '../parseEnv';

export default {

  ['Parses multiline env KEY=VAL variables']() {
    assert.deepEqual(
      parseEnv(`
        KEY1=VAL1
        KEY2=SOME_LARGE_&&%B/'$%NEW_VAL2
      `),
      {
        KEY1: 'VAL1',
        KEY2: 'SOME_LARGE_&&%B/\'$%NEW_VAL2',
      },
    );
  },


};

