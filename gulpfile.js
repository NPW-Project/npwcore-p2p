'use strict';

var startGulp = require('npwcore-build');
var opts = {skipBrowser: true};
Object.assign(exports, startGulp('p2p', opts))
