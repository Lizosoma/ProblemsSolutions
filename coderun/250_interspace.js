module.exports = function(inputString) {
    const pattern = /^([G-HK-U]{1}[3-8]{3})(B{1}[CKMB]{1}[GJP]{1}|T{1}[ORS]{1}[J8ME]{1})([0-9A-Y]{1,24})Z$/;
    const match = pattern.exec(inputString);
    console.log(match)


    if (!match) {
        return null;
    }

    const spaceCode = match[1];
    const industryCode = match[2][0];
    const subcodes = match[2].slice(1, 3);
    const instanceId = match[3];

    return [spaceCode, industryCode, subcodes, instanceId];
};