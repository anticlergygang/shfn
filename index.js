const util = require('util')
const exec = util.promisify(require('child_process').exec)
exports.getbestblockhashPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getbestblockhash ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getbestblockhash').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblock').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblockchaininfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblockchaininfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblockchaininfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblockcountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblockcount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblockcount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblockhashPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblockhash ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblockhash').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblockheaderPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblockheader ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblockheader').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getchaintipsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getchaintips ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getchaintips').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getchaintxstatsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getchaintxstats ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getchaintxstats').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getdifficultyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getdifficulty ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getdifficulty').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmempoolancestorsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmempoolancestors ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmempoolancestors').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmempooldescendantsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmempooldescendants ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmempooldescendants').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmempoolentryPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmempoolentry ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmempoolentry').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmempoolinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmempoolinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmempoolinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getrawmempoolPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getrawmempool ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getrawmempool').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.gettxoutPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli gettxout ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli gettxout').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.gettxoutproofPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli gettxoutproof ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli gettxoutproof').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.gettxoutsetinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli gettxoutsetinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli gettxoutsetinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.preciousblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli preciousblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli preciousblock').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.pruneblockchainPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli pruneblockchain ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli pruneblockchain').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.savemempoolPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli savemempool ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli savemempool').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.verifychainPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli verifychain ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli verifychain').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.verifytxoutproofPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli verifytxoutproof ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli verifytxoutproof').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmemoryinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmemoryinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmemoryinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.helpPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli help ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli help').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.loggingPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli logging ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli logging').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.stopPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli stop ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli stop').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.uptimePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli uptime ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli uptime').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.generatePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli generate ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli generate').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.generatetoaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli generatetoaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli generatetoaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getblocktemplatePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getblocktemplate ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getblocktemplate').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getmininginfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getmininginfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getmininginfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getnetworkhashpsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getnetworkhashps ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getnetworkhashps').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.prioritisetransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli prioritisetransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli prioritisetransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.submitblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli submitblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli submitblock').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.addnodePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli addnode ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli addnode').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.clearbannedPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli clearbanned ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli clearbanned').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.disconnectnodePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli disconnectnode ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli disconnectnode').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getaddednodeinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getaddednodeinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getaddednodeinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getconnectioncountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getconnectioncount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getconnectioncount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getnettotalsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getnettotals ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getnettotals').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getnetworkinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getnetworkinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getnetworkinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getpeerinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getpeerinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getpeerinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listbannedPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listbanned ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listbanned').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.pingPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli ping ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli ping').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.setbanPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli setban ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli setban').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.setnetworkactivePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli setnetworkactive ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli setnetworkactive').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.combinerawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli combinerawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli combinerawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.createrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli createrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli createrawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.decoderawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli decoderawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli decoderawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.decodescriptPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli decodescript ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli decodescript').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.fundrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli fundrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli fundrawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getrawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.sendrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli sendrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli sendrawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.signrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli signrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli signrawtransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.createmultisigPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli createmultisig ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli createmultisig').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.estimatefeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli estimatefee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli estimatefee').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.estimatesmartfeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli estimatesmartfee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli estimatesmartfee').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.signmessagewithprivkeyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli signmessagewithprivkey ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli signmessagewithprivkey').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.validateaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli validateaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli validateaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.verifymessagePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli verifymessage ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli verifymessage').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.abandontransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli abandontransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli abandontransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.abortrescanPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli abortrescan ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli abortrescan').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.addmultisigaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli addmultisigaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli addmultisigaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.backupwalletPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli backupwallet ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli backupwallet').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.bumpfeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli bumpfee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli bumpfee').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.dumpprivkeyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli dumpprivkey ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli dumpprivkey').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.dumpwalletPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli dumpwallet ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli dumpwallet').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.encryptwalletPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli encryptwallet ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli encryptwallet').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getaccountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getaccount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getaccount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getaccountaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getaccountaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getaccountaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getaddressesbyaccountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getaddressesbyaccount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getaddressesbyaccount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getbalancePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getbalance ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getbalance').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getnewaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getnewaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getnewaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getrawchangeaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getrawchangeaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getrawchangeaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getreceivedbyaccountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getreceivedbyaccount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getreceivedbyaccount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getreceivedbyaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getreceivedbyaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getreceivedbyaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.gettransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli gettransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli gettransaction').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getunconfirmedbalancePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getunconfirmedbalance ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getunconfirmedbalance').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.getwalletinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli getwalletinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli getwalletinfo').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importmultiPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importmulti ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importmulti').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importprivkeyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importprivkey ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importprivkey').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importprunedfundsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importprunedfunds ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importprunedfunds').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importpubkeyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importpubkey ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importpubkey').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.importwalletPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli importwallet ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli importwallet').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.keypoolrefillPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli keypoolrefill ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli keypoolrefill').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listaccountsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listaccounts ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listaccounts').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listaddressgroupingsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listaddressgroupings ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listaddressgroupings').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listlockunspentPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listlockunspent ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listlockunspent').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listreceivedbyaccountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listreceivedbyaccount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listreceivedbyaccount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listreceivedbyaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listreceivedbyaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listreceivedbyaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listsinceblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listsinceblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listsinceblock').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listtransactionsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listtransactions ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listtransactions').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listunspentPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listunspent ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listunspent').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.listwalletsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli listwallets ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli listwallets').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.lockunspentPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli lockunspent ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli lockunspent').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.movePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli move ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli move').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.removeprunedfundsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli removeprunedfunds ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli removeprunedfunds').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.rescanblockchainPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli rescanblockchain ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli rescanblockchain').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.sendfromPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli sendfrom ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli sendfrom').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.sendmanyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli sendmany ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli sendmany').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.sendtoaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli sendtoaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli sendtoaddress').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.setaccountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli setaccount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli setaccount').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.settxfeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli settxfee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli settxfee').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.signmessagePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli signmessage ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli signmessage').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.walletlockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli walletlock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli walletlock').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.walletpassphrasePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli walletpassphrase ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli walletpassphrase').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}
exports.walletpassphrasechangePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli walletpassphrasechange ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(out)
                else
                    reject(err)
            }).catch(err => {
                reject(err)
            })
        else
            exec('bitcoin-cli walletpassphrasechange').then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
    })
}