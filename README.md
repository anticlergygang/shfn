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
shfn.abandontransactionPromise      shfn.abortrescanPromise             shfn.addmultisigaddressPromise      shfn.addnodePromise
shfn.backupwalletPromise            shfn.bumpfeePromise                 shfn.clearbannedPromise             shfn.combinerawtransactionPromise
shfn.createmultisigPromise          shfn.createrawtransactionPromise    shfn.decoderawtransactionPromise    shfn.decodescriptPromise
shfn.disconnectnodePromise          shfn.dumpprivkeyPromise             shfn.dumpwalletPromise              shfn.encryptwalletPromise
shfn.estimatefeePromise             shfn.estimatesmartfeePromise        shfn.fundrawtransactionPromise      shfn.generatePromise
shfn.generatetoaddressPromise       shfn.getaccountPromise              shfn.getaccountaddressPromise       shfn.getaddednodeinfoPromise
shfn.getaddressesbyaccountPromise   shfn.getbalancePromise              shfn.getbestblockhashPromise        shfn.getblockPromise
shfn.getblockchaininfoPromise       shfn.getblockcountPromise           shfn.getblockhashPromise            shfn.getblockheaderPromise
shfn.getblocktemplatePromise        shfn.getchaintipsPromise            shfn.getchaintxstatsPromise         shfn.getconnectioncountPromise
shfn.getdifficultyPromise           shfn.getmemoryinfoPromise           shfn.getmempoolancestorsPromise     shfn.getmempooldescendantsPromise
shfn.getmempoolentryPromise         shfn.getmempoolinfoPromise          shfn.getmininginfoPromise           shfn.getnettotalsPromise
shfn.getnetworkhashpsPromise        shfn.getnetworkinfoPromise          shfn.getnewaddressPromise           shfn.getpeerinfoPromise
shfn.getrawchangeaddressPromise     shfn.getrawmempoolPromise           shfn.getrawtransactionPromise       shfn.getreceivedbyaccountPromise
shfn.getreceivedbyaddressPromise    shfn.gettransactionPromise          shfn.gettxoutPromise                shfn.gettxoutproofPromise
shfn.gettxoutsetinfoPromise         shfn.getunconfirmedbalancePromise   shfn.getwalletinfoPromise           shfn.helpPromise
shfn.importaddressPromise           shfn.importmultiPromise             shfn.importprivkeyPromise           shfn.importprunedfundsPromise
shfn.importpubkeyPromise            shfn.importwalletPromise            shfn.keypoolrefillPromise           shfn.listaccountsPromise
shfn.listaddressgroupingsPromise    shfn.listbannedPromise              shfn.listlockunspentPromise         shfn.listreceivedbyaccountPromise
shfn.listreceivedbyaddressPromise   shfn.listsinceblockPromise          shfn.listtransactionsPromise        shfn.listunspentPromise
shfn.listwalletsPromise             shfn.lockunspentPromise             shfn.loggingPromise                 shfn.movePromise
shfn.pingPromise                    shfn.preciousblockPromise           shfn.prioritisetransactionPromise   shfn.pruneblockchainPromise
shfn.removeprunedfundsPromise       shfn.rescanblockchainPromise        shfn.savemempoolPromise             shfn.sendfromPromise
shfn.sendmanyPromise                shfn.sendrawtransactionPromise      shfn.sendtoaddressPromise           shfn.setaccountPromise
shfn.setbanPromise                  shfn.setnetworkactivePromise        shfn.settxfeePromise                shfn.signmessagePromise
shfn.signmessagewithprivkeyPromise  shfn.signrawtransactionPromise      shfn.stopPromise                    shfn.submitblockPromise
shfn.uptimePromise                  shfn.validateaddressPromise         shfn.verifychainPromise             shfn.verifymessagePromise
shfn.verifytxoutproofPromise        shfn.walletlockPromise              shfn.walletpassphrasePromise        shfn.walletpassphrasechangePromise
```
