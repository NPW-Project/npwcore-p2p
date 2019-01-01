'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Masternode announce message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function MnbMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(MnbMessage, Message);

MnbMessage.prototype.setPayload = function() {};

MnbMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = MnbMessage;
