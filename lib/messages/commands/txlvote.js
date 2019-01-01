'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * TX lock vote message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function TxlvoteMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(TxlvoteMessage, Message);

TxlvoteMessage.prototype.setPayload = function() {};

TxlvoteMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = TxlvoteMessage;
