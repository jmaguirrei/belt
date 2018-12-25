

require('babel-register')({
  presets: [
    [ 'env', { targets: { node: 'current' } } ],
    'stage-2'
  ]
});

const path = require('path');

require('../tester/src/index.js').init({
  belt: path.join(__dirname, './src/'),
});
