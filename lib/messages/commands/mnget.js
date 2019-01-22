'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Masternode message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function MngetMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(MngetMessage, Message);

MngetMessage.prototype.setPayload = function() {};

MngetMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = MngetMessage;
