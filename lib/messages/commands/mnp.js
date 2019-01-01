'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Masternode ping message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function MnpMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(MnpMessage, Message);

MnpMessage.prototype.setPayload = function() {};

MnpMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = MnpMessage;
