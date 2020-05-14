require('ts-node').register({
  project: 'gatsby/tsconfig.json',
});

exports.createPages = require('./gatsby/node/createPages').createPages;

exports.onCreateNode = require('./gatsby/node/onCreateNode').onCreateNode;
