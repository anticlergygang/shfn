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
shfn.abandontransaction      shfn.abortrescan             shfn.addmultisigaddress      shfn.addnode                 shfn.backupwallet
shfn.bumpfee                 shfn.clearbanned             shfn.combinerawtransaction   shfn.createmultisig          shfn.createrawtransaction
shfn.decoderawtransaction    shfn.decodescript            shfn.disconnectnode          shfn.dumpprivkey             shfn.dumpwallet
shfn.encryptwallet           shfn.estimatefee             shfn.estimatesmartfee        shfn.fundrawtransaction      shfn.generate
shfn.generatetoaddress       shfn.getaccount              shfn.getaccountaddress       shfn.getaddednodeinfo        shfn.getaddressesbyaccount
shfn.getbalance              shfn.getbestblockhash        shfn.getblock                shfn.getblockchaininfo       shfn.getblockcount
shfn.getblockhash            shfn.getblockheader          shfn.getblocktemplate        shfn.getchaintips            shfn.getchaintxstats
shfn.getconnectioncount      shfn.getdifficulty           shfn.getmemoryinfo           shfn.getmempoolancestors     shfn.getmempooldescendants
shfn.getmempoolentry         shfn.getmempoolinfo          shfn.getmininginfo           shfn.getnettotals            shfn.getnetworkhashps
shfn.getnetworkinfo          shfn.getnewaddress           shfn.getpeerinfo             shfn.getrawchangeaddress     shfn.getrawmempool
shfn.getrawtransaction       shfn.getreceivedbyaccount    shfn.getreceivedbyaddress    shfn.gettransaction          shfn.gettxout
shfn.gettxoutproof           shfn.gettxoutsetinfo         shfn.getunconfirmedbalance   shfn.getwalletinfo           shfn.help
shfn.helpPromise             shfn.importaddress           shfn.importmulti             shfn.importprivkey           shfn.importprunedfunds
shfn.importpubkey            shfn.importwallet            shfn.keypoolrefill           shfn.listaccounts            shfn.listaddressgroupings
shfn.listbanned              shfn.listlockunspent         shfn.listreceivedbyaccount   shfn.listreceivedbyaddress   shfn.listsinceblock
shfn.listtransactions        shfn.listunspent             shfn.listwallets             shfn.lockunspent             shfn.logging
shfn.move                    shfn.ping                    shfn.preciousblock           shfn.prioritisetransaction   shfn.pruneblockchain
shfn.removeprunedfunds       shfn.rescanblockchain        shfn.savemempool             shfn.sendfrom                shfn.sendmany
shfn.sendrawtransaction      shfn.sendtoaddress           shfn.setaccount              shfn.setban                  shfn.setnetworkactive
shfn.settxfee                shfn.signmessage             shfn.signmessagewithprivkey  shfn.signrawtransaction      shfn.stop
shfn.submitblock             shfn.uptime                  shfn.validateaddress         shfn.verifychain             shfn.verifymessage
shfn.verifytxoutproof        shfn.walletlock              shfn.walletpassphrase        shfn.walletpassphrasechange 
```
