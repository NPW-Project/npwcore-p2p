'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Request information about sporks
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function GetsporksMessage(arg, options) {
  Message.call(this, options);
  this.command = 'getsporks';
}
inherits(GetsporksMessage, Message);

GetsporksMessage.prototype.setPayload = function() {};

GetsporksMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = GetsporksMessage;
