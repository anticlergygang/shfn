# shfn
setHacked promisifed bitcoin core full node

You should have access to the bitcoin-cli command in the process you decide to run the node code in.

`npm i shfn`


```js
const shfn = require('shfn')
console.log(shfn)
//{ helpPromise: [Function],
//  getbestblockhashPromise: [Function],
//  getblockPromise: [Function],
//  getblockchaininfoPromise: [Function],
//  getblockcountPromise: [Function],
//  getblockhashPromise: [Function],
//  getblockheaderPromise: [Function],
//  ... }

shfn.helpPromise().then(out =>
    console.log(out)
).catch(err =>
    console.log(err)
)

shfn.helpPromise('getblockchaininfo').then(out =>
    console.log(out)
).catch(err =>
    console.log(err)
)
```
