'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Masternode winner message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function MnwMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(MnwMessage, Message);

MnwMessage.prototype.setPayload = function() {};

MnwMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = MnwMessage;
