'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var npwcore = require('npwcore-lib');
var $ = npwcore.util.preconditions;
var _ = npwcore.deps._;

/**
 * @param {Transaction=} arg - An instance of Transaction
 * @param {Object} options
 * @extends Message
 * @constructor
 */
function TransactionMessage(arg, options) {
  Message.call(this, options);
  this.command = 'tx';
  this.Transaction = options.Transaction;
  $.checkArgument(
    _.isUndefined(arg) || arg instanceof this.Transaction,
    'An instance of Transaction or undefined is expected'
  );
  this.transaction = arg;
  if (!this.transaction) {
    this.transaction = new this.Transaction().toObject();
  }
}
inherits(TransactionMessage, Message);

TransactionMessage.prototype.setPayload = function(payload) {
  this.transaction = this.Transaction.fromBuffer(payload).toObject();
};

TransactionMessage.prototype.getPayload = function() {
  return this.Transaction(this.transaction).toBuffer();
};

module.exports = TransactionMessage;
