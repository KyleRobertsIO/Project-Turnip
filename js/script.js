const { default: SlippiGame } = require('slp-parser-js');
const fs = require('fs');
let SC = require('../SlippiCollection.js');

const slippiPath = "C:/Users/kkrob/Desktop/FM-v5.9-Slippi-r18-Win/Slippi/";

    var slippyFiles = fs.readdirSync(slippiPath, function(err, files){
        if(err){
            return console.log("Unable to scan directory " + err);
        }
    });

for(let i = 0; i < slippyFiles.length; i++){
    let path = slippiPath + slippyFiles[i];
    let data = SC.readSlippiSettings(path);


    let stats = SC.readSlippiStats(path);
    //console.log(SC.getMatchWinner(stats));



    //console.log(SC.getMatchStage(data));
    console.log(SC.getMatchCharcters(data));
    //console.log(data);
}



// Get game settings – stage, characters, etc
//let game = new SlippiGame((slippiPath + slippyFiles[0]));
//const settings = game.getSettings();
//console.log(getGamemode(settings));
//console.log(settings);



// Get metadata - start time, platform played on, etc
//let game = new SlippiGame((slippiPath + slippyFiles[0]));
//const metadata = game.getMetadata();
//console.log(metadata);
//console.log(metadata.players[0].characters[24]);


// Get computed stats - openings / kill, conversions, etc
//let game = new SlippiGame((slippiPath + slippyFiles[1]));
//const stats = game.getStats();
//console.log(stats.stocks);


// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
//let game = new SlippiGame((slippiPath + slippyFiles[0]));
//const frames = game.getFrames();
//console.log(frames[0].players); // Print frame when timer starts counting down
