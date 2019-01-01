Npwcore P2P
=======

`npwcore-p2p` adds NewPowerCoin protocol support for Npwcore.

See [the main npwcore repo](https://github.com/npw-project/NewPowerCoin) for more information.

## Getting Started

```sh
npm install npwcore-p2p
```
In order to connect to the NPW network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('npwcore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

## Contributing

See [CONTRIBUTING.md](https://github.com/npw-project/NewPowerCoin/blob/master/CONTRIBUTING.md) on the main npwcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/npw-project/npwcore-p2p/blob/master/LICENSE).

Copyright 2018 NewPowerCoin, Inc. Npwcore is a trademark maintained by NewPowerCoin, Inc.
