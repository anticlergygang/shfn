const exec = util.promisify(require('child_process').exec)

exports helpPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli help ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli help`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getbestblockhashPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getbestblockhash ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getbestblockhash`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblock`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblockchaininfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblockchaininfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblockchaininfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblockcountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblockcount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblockcount`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblockhashPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblockhash ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblockhash`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblockheaderPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblockheader ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblockheader`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getchaintipsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getchaintips ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getchaintips`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getchaintxstatsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getchaintxstats ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getchaintxstats`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getdifficultyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getdifficulty ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getdifficulty`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmempoolancestorsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmempoolancestors ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmempoolancestors`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmempooldescendantsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmempooldescendants ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmempooldescendants`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmempoolentryPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmempoolentry ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmempoolentry`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmempoolinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmempoolinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmempoolinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getrawmempoolPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getrawmempool ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getrawmempool`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports gettxoutPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli gettxout ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli gettxout`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports gettxoutproofPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli gettxoutproof ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli gettxoutproof`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports gettxoutsetinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli gettxoutsetinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli gettxoutsetinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports preciousblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli preciousblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli preciousblock`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports pruneblockchainPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli pruneblockchain ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli pruneblockchain`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports savemempoolPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli savemempool ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli savemempool`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports verifychainPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli verifychain ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli verifychain`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports verifytxoutproofPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli verifytxoutproof ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli verifytxoutproof`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmemoryinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmemoryinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmemoryinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports loggingPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli logging ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli logging`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports stopPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli stop ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli stop`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports uptimePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli uptime ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli uptime`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports generatetoaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli generatetoaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli generatetoaddress`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getblocktemplatePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getblocktemplate ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getblocktemplate`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getmininginfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getmininginfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getmininginfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getnetworkhashpsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getnetworkhashps ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getnetworkhashps`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports prioritisetransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli prioritisetransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli prioritisetransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports submitblockPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli submitblock ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli submitblock`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports addnodePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli addnode ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli addnode`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports clearbannedPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli clearbanned ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli clearbanned`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports disconnectnodePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli disconnectnode ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli disconnectnode`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getaddednodeinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getaddednodeinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getaddednodeinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getconnectioncountPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getconnectioncount ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getconnectioncount`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getnettotalsPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getnettotals ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getnettotals`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getnetworkinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getnetworkinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getnetworkinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getpeerinfoPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getpeerinfo ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getpeerinfo`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports listbannedPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli listbanned ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli listbanned`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports pingPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli ping ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli ping`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports setbanPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli setban ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli setban`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports setnetworkactivePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli setnetworkactive ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli setnetworkactive`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports combinerawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli combinerawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli combinerawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports createrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli createrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli createrawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports decoderawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli decoderawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli decoderawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports decodescriptPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli decodescript ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli decodescript`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports getrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli getrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli getrawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports sendrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli sendrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli sendrawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports signrawtransactionPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli signrawtransaction ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli signrawtransaction`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports createmultisigPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli createmultisig ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli createmultisig`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports estimatefeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli estimatefee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli estimatefee`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports estimatesmartfeePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli estimatesmartfee ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli estimatesmartfee`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports signmessagewithprivkeyPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli signmessagewithprivkey ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli signmessagewithprivkey`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports validateaddressPromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli validateaddress ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli validateaddress`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}

exports verifymessagePromise = params => {
    return new Promise((resolve, reject) => {
        if (params !== undefined) {
            exec(`bitcoin-cli verifymessage ${params}`).then(({ stdout, stderr }) => {
                if (stderr === '')
                    resolve(stdout)
                else
                    reject(stderr)
            }).catch(err => {
                reject(err)
            })
        } else {
            exec(`bitcoin-cli verifymessage`).then(({ stdout, stderr }) => {
                if (stderr === '') {
                    resolve(stdout)
                } else {
                    reject(stderr)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}
