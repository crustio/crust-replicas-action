const core = require('@actions/core');
const { ApiPromise, WsProvider } = require('@polkadot/api');
const { typesBundleForPolkadot } = require('@crustio/type-definitions');
const { checkCid, parsObj } = require('./util');

async function main() {
    // 1. Get all inputs
    const cid = core.getInput('cid'); // Currently, we only support CIDv0
    const chainAddr = core.getInput('crust-endpoint');

    // 2. Check cid and seeds
    if (!checkCid(cid)) {
        throw new Error('Illegal inputs');
    }

    // 3. Try to connect to Crust Chain
    const chain = new ApiPromise({
        provider: new WsProvider(chainAddr),
        typesBundle: typesBundleForPolkadot
    });

    await chain.isReadyOrError;

    const file = parsObj(await chain.query.market.files(cid));

    if (file) {
        core.setOutput('replicaCount', file.reported_replica_count);
    } else {
        core.setOutput('replicaCount', 0);
    }
 
}

main().catch(error => {
    core.setFailed(error.message);
});