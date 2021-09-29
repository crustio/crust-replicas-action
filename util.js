/* PUBLIC METHODS */
/**
 * Check CIDv0 legality
 * @param {string} cid 
 * @returns boolean
 */
function checkCid(cid) {
    return cid.length === 46 && cid.substr(0, 2) === 'Qm';
}

function parsObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    checkCid,
    parsObj
}