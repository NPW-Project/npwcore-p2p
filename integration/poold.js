var p2p = require("../");
var Peer = p2p.Peer;
var Pool = p2p.Pool;
var Networks = require("npwcore-lib").Networks;
var LRU = require("lru-cache");

var pool = new Pool({
  network: Networks.livenet, // the network object
  dnsSeed: true, // prevent seeding with DNS discovered known peers upon connecting
  listenAddr: true, // prevent new peers being added from addr messages
  addrs: [
    // initial peers to connect to
  ]
});

pool.connect();

var _inv = LRU(1000);
// attach peer events
pool.on("peerready", function (peer, addr) {
  console.log(
    "Connected to peer: " +
    addr.ip.v4 +
    ", version: " +
    peer.version +
    ", subversion: " +
    peer.subversion +
    ", status: " +
    peer.status +
    ", port: " +
    peer.port +
    ", best height: " +
    peer.bestHeight
  );
});
pool.on("peerinv", function (peer, message) {
  var newDataNeeded = [];
  message.inventory.forEach(function (inv) {
    if (!_inv.get(inv.hash.toString('hex'))) {
      _inv.set(inv.hash.toString('hex'), true);
      newDataNeeded.push(inv);
    }
  });

  if (newDataNeeded.length > 0) {
    peer.sendMessage(peer.messages.GetData(newDataNeeded));
  }
});
pool.on("peertx", function (peer, message) {
  console.log(message.transaction.toJSON());
});
pool.on("peerblock", function (peer, message) {
  console.log(message.block.toJSON());
});
pool.on("peeraddr", function (peer, message) {
  console.log(message.addresses);
});
