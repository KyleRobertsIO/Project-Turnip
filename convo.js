const SC = require('./SlippiCollection.js');
const fs = require('fs');

const slippiPath = "C:\\Users\\kkrob\\Desktop\\FM-v5.9-Slippi-r18-Win\\Slippi\\";

let sf = fs.readdirSync(slippiPath, function (err, files) {
    if (err) {
        return console.log("Unable to scan directory " + err);
    }
});

let path = slippiPath + sf[1];
let stats = SC.readSlippiStats(path);

let ratios = SC.getConversionRatios(stats);

ratios.forEach(ratio => {
    //console.log(ratio);
});

console.log(stats.overall);