'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Sent Masternode entries to peer
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function SscMessage(arg, options) {
  Message.call(this, options);
  this.command = 'ssc';
}
inherits(SscMessage, Message);

SscMessage.prototype.setPayload = function() {};

SscMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = SscMessage;
