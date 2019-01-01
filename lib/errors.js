'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on npwcore-p2p Module {0}'
};

module.exports = require('npwcore-lib').errors.extend(spec);
