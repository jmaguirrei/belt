

require('babel-register')({
  presets: [
    [ 'env', { targets: { node: 'current' } } ],
    'stage-2'
  ]
});

const path = require('path');

require('@jmaguirrei/tester').init(path.join(__dirname, './src/'));
