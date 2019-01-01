'use strict';

var p2p = require('../');
var Peer = p2p.Peer;
var npwcore = require('npwcore-lib');
var Networks = npwcore.Networks;


// config 
var opts = {
  host: '142.93.74.167',
  port: 61472,
  network: Networks.livenet
};
var peer = new Peer(opts);

peer.on('ready', function () {
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.once('version', function (message) {
  console.log(message.command, message.timestamp, message.subversion, message.startHeight);
});
peer.once('verack', function (message) {
  console.log(message.command);
});
peer.on('inv', function (message) {
  var newDataNeeded = [];
  message.inventory.forEach(function (inv) {
    if (inv.type == 1 || inv.type == 2) {
      newDataNeeded.push(inv);
      console.log(inv);
    }
  });
  if (newDataNeeded.length > 0) {
    peer.sendMessage(peer.messages.GetData(newDataNeeded));
  }
});
peer.on('tx', function (message) {
  console.log(message.transaction.toJSON());
});
peer.on('block', function (message) {
  console.log(message.block.toJSON());
});
peer.on('addr', function (message) {
  console.log(message.addresses);
});
peer.on('getdata', function (message) {
  console.log(message);
});


peer.connect();
