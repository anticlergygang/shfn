const util = require('util')
const exec = util.promisify(require('child_process').exec)

exports.helpPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined)
            exec(`bitcoin-cli help ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        else
            exec(`bitcoin-cli help`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
    })
}

exports.getbestblockhash = params => {
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
exports.getblock = params => {
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
exports.getblockchaininfo = params => {
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
exports.getblockcount = params => {
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
exports.getblockhash = params => {
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
exports.getblockheader = params => {
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
exports.getchaintips = params => {
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
exports.getchaintxstats = params => {
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
exports.getdifficulty = params => {
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
exports.getmempoolancestors = params => {
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
exports.getmempooldescendants = params => {
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
exports.getmempoolentry = params => {
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
exports.getmempoolinfo = params => {
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
exports.getrawmempool = params => {
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
exports.gettxout = params => {
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
exports.gettxoutproof = params => {
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
exports.gettxoutsetinfo = params => {
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
exports.preciousblock = params => {
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
exports.pruneblockchain = params => {
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
exports.savemempool = params => {
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
exports.verifychain = params => {
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
exports.verifytxoutproof = params => {
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
exports.getmemoryinfo = params => {
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
exports.help = params => {
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
exports.logging = params => {
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
exports.stop = params => {
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
exports.uptime = params => {
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
exports.generate = params => {
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
exports.generatetoaddress = params => {
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
exports.getblocktemplate = params => {
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
exports.getmininginfo = params => {
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
exports.getnetworkhashps = params => {
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
exports.prioritisetransaction = params => {
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
exports.submitblock = params => {
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
exports.addnode = params => {
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
exports.clearbanned = params => {
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
exports.disconnectnode = params => {
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
exports.getaddednodeinfo = params => {
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
exports.getconnectioncount = params => {
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
exports.getnettotals = params => {
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
exports.getnetworkinfo = params => {
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
exports.getpeerinfo = params => {
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
exports.listbanned = params => {
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
exports.ping = params => {
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
exports.setban = params => {
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
exports.setnetworkactive = params => {
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
exports.combinerawtransaction = params => {
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
exports.createrawtransaction = params => {
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
exports.decoderawtransaction = params => {
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
exports.decodescript = params => {
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
exports.fundrawtransaction = params => {
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
exports.getrawtransaction = params => {
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
exports.sendrawtransaction = params => {
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
exports.signrawtransaction = params => {
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
exports.createmultisig = params => {
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
exports.estimatefee = params => {
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
exports.estimatesmartfee = params => {
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
exports.signmessagewithprivkey = params => {
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
exports.validateaddress = params => {
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
exports.verifymessage = params => {
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
exports.abandontransaction = params => {
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
exports.abortrescan = params => {
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
exports.addmultisigaddress = params => {
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
exports.backupwallet = params => {
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
exports.bumpfee = params => {
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
exports.dumpprivkey = params => {
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
exports.dumpwallet = params => {
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
exports.encryptwallet = params => {
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
exports.getaccount = params => {
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
exports.getaccountaddress = params => {
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
exports.getaddressesbyaccount = params => {
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
exports.getbalance = params => {
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
exports.getnewaddress = params => {
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
exports.getrawchangeaddress = params => {
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
exports.getreceivedbyaccount = params => {
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
exports.getreceivedbyaddress = params => {
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
exports.gettransaction = params => {
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
exports.getunconfirmedbalance = params => {
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
exports.getwalletinfo = params => {
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
exports.importaddress = params => {
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
exports.importmulti = params => {
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
exports.importprivkey = params => {
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
exports.importprunedfunds = params => {
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
exports.importpubkey = params => {
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
exports.importwallet = params => {
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
exports.keypoolrefill = params => {
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
exports.listaccounts = params => {
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
exports.listaddressgroupings = params => {
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
exports.listlockunspent = params => {
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
exports.listreceivedbyaccount = params => {
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
exports.listreceivedbyaddress = params => {
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
exports.listsinceblock = params => {
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
exports.listtransactions = params => {
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
exports.listunspent = params => {
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
exports.listwallets = params => {
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
exports.lockunspent = params => {
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
exports.move = params => {
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
exports.removeprunedfunds = params => {
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
exports.rescanblockchain = params => {
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
exports.sendfrom = params => {
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
exports.sendmany = params => {
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
exports.sendtoaddress = params => {
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
exports.setaccount = params => {
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
exports.settxfee = params => {
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
exports.signmessage = params => {
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
exports.walletlock = params => {
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
exports.walletpassphrase = params => {
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
exports.walletpassphrasechange = params => {
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