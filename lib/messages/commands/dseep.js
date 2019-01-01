'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Relaying from active masternode
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function DseepMessage(arg, options) {
  Message.call(this, options);
  this.command = 'dseep';
}
inherits(DseepMessage, Message);

DseepMessage.prototype.setPayload = function() {};

DseepMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = DseepMessage;
