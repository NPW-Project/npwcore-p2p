# Peer-to-Peer
The `npwcore-p2p` module provides peer-to-peer networking capabilities for [Npwcore](https://github.com/npw-project/NewPowerCoin), and includes [Peer](peer.md) and [Pool](pool.md) classes. A [Message](messages.md) class is also exposed, in addition to [several types of messages](messages.md). Pool will maintain connection to several peers, Peers represents a node in the bitcoin network, and Message represents data sent to and from a Peer.

## Installation
Peer-to-peer is implemented as a separate module.

For node projects:

```bash
npm install npwcore-p2p --save
```

## Quick Start

```javascript
var Peer = require('npwcore-p2p').Peer;
var peer = new Peer({host: '5.9.85.34'});

// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});

peer.connect();
```
