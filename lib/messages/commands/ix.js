'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * TX lock request message
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function IxMessage(arg, options) {
  Message.call(this, options);
  this.command = 'mnp';
}
inherits(IxMessage, Message);

IxMessage.prototype.setPayload = function() {};

IxMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = IxMessage;
