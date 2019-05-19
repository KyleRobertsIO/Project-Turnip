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

//console.log(stats.conversions);

/*var player1Conversions = [];
var player2Conversions = [];
var player3Conversions = [];
var player4Conversions = [];*/
/*switch (convo.playerIndex) {
        case 0:
            player1Conversions.push(conversionObj);
            break;
        case 1:
            player1Conversions.push(conversionObj);
            break;
        case 2:
            player1Conversions.push(conversionObj);
            break;
        case 3:
            player1Conversions.push(conversionObj);
            break;
    }*/

var match = {
    player1: {
        stocks: []
    },
    player2: {
        stocks: []
    },
    player3: {
        stocks: []
    },
    player4: {
        stocks: []
    }
};

var convo = stats.conversions;
var conversions = [];

for (let i = 0; i < convo.length; i++) {
    conversions.push(createConversion(convo[i]));
    if (convo[i].didKill || i == (convo.length - 1)) {
        let stockObj = {
            damage_done: damageDoneToPlayerInStock(conversions),
            conversions: conversions
        }
        switch (convo[i].playerIndex) {
            case 0:
                match.player1.stocks.push(stockObj);
                break;
            case 1:
                match.player2.stocks.push(stockObj);
                break;
            case 2:
                match.player3.stocks.push(stockObj);
                break;
            case 3:
                match.player4.stocks.push(stockObj);
                break;
        }
        conversions = [];
    }
}
console.log(match);

function damageDoneToPlayerInStock(stockConversions) {
    stockDamage = 0;
    stockConversions.forEach(index => {
        stockDamage += index.damage_done;
    });
    return stockDamage;
}

function createConversion(conversionObj) {
    let moveArray = [];
    let moveIdArray = conversionObj.moves;
    moveIdArray.forEach(index => {
        let move = SC.getMoveInfo(index.moveId);
        moveArray.push(move.name);
    });

    let conversion = {
        opponentIndex: conversionObj.opponentIndex,
        openning: conversionObj.openingType,
        damage_done: conversionObj.endPercent - conversionObj.startPercent,
        statPercent: conversionObj.startPercent,
        endPercent: conversionObj.endPercent,
        didKill: conversionObj.didKill,
        moves: moveArray,
    }
    return conversion;
}