# shfn
setHacked promisifed bitcoin core full node

You should have access to the bitcoin-cli command in the process you decide to run the node code in.

`npm i shfn`


```js
const shfn = require('shfn')

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

```
shfn.addnodePromise                 shfn.clearbannedPromise             shfn.combinerawtransactionPromise   shfn.createmultisigPromise
shfn.createrawtransactionPromise    shfn.decoderawtransactionPromise    shfn.decodescriptPromise            shfn.disconnectnodePromise
shfn.estimatefeePromise             shfn.estimatesmartfeePromise        shfn.generatetoaddressPromise       shfn.getaddednodeinfoPromise
shfn.getbestblockhashPromise        shfn.getblockPromise                shfn.getblockchaininfoPromise       shfn.getblockcountPromise
shfn.getblockhashPromise            shfn.getblockheaderPromise          shfn.getblocktemplatePromise        shfn.getchaintipsPromise
shfn.getchaintxstatsPromise         shfn.getconnectioncountPromise      shfn.getdifficultyPromise           shfn.getmemoryinfoPromise
shfn.getmempoolancestorsPromise     shfn.getmempooldescendantsPromise   shfn.getmempoolentryPromise         shfn.getmempoolinfoPromise
shfn.getmininginfoPromise           shfn.getnettotalsPromise            shfn.getnetworkhashpsPromise        shfn.getnetworkinfoPromise
shfn.getpeerinfoPromise             shfn.getrawmempoolPromise           shfn.getrawtransactionPromise       shfn.gettxoutPromise
shfn.gettxoutproofPromise           shfn.gettxoutsetinfoPromise         shfn.helpPromise                    shfn.listbannedPromise
shfn.loggingPromise                 shfn.pingPromise                    shfn.preciousblockPromise           shfn.prioritisetransactionPromise
shfn.pruneblockchainPromise         shfn.savemempoolPromise             shfn.sendrawtransactionPromise      shfn.setbanPromise
shfn.setnetworkactivePromise        shfn.signmessagewithprivkeyPromise  shfn.signrawtransactionPromise      shfn.stopPromise
shfn.submitblockPromise             shfn.uptimePromise                  shfn.validateaddressPromise         shfn.verifychainPromise
shfn.verifymessagePromise           shfn.verifytxoutproofPromise 
```
