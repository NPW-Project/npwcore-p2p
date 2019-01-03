'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var BufferUtil = npwcore.util.buffer;

/**
 * Obfuscation Election Entry
 * @extends Message
 * @param {Object} options
 * @constructor
 */
function DseeMessage(arg, options) {
  Message.call(this, options);
  this.command = 'dsee';
}
inherits(DseeMessage, Message);

DseeMessage.prototype.setPayload = function() {};

DseeMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = DseeMessage;
