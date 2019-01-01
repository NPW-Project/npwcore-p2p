'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Spork message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function SporkMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(SporkMessage, Message);

SporkMessage.prototype.setPayload = function() {};

SporkMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = SporkMessage;
