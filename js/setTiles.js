const fs = require('fs');
let SC = require('../SlippiCollection.js');

let container = document.getElementById('page-container');
const slippiPath = "C:/Users/kkrob/Desktop/FM-v5.9-Slippi-r18-Win/Slippi/";

let slippiFiles = fs.readdirSync(slippiPath, function(err, files){
    if(err){
        return console.log("Unable to scan directory " + err);
    }
});

for(let i = 0; i < slippiFiles.length; i++){
    let data = SC.readSlippiSettings(slippiPath + slippiFiles[i]);
    createMatch(data);
}

function createMatch(data){
    let matchContainer = document.createElement('div');
    let stage = SC.getMatchStage(data);
    matchContainer.style.backgroundImage = `url('../stages/${stage.image}')`;
    matchContainer.classList.add("match-container");
    createPlayers(data, matchContainer);
    createStatsButton(matchContainer);
    container.appendChild(matchContainer);
}

function createPlayers(data, matchContainer){
    console.log(data);
    let characters = SC.getMatchCharcters(data);
    let playersContainer = document.createElement('div');
    playersContainer.classList.add('players-container');
    for(let i = 0; i < characters.length; i++){
        let stockContainer = document.createElement('div');
        stockContainer.classList.add('stock-count');
        stockContainer.classList.add(`player-${(i+1)}`);
        let stockIcon = document.createElement('img');
        stockIcon.setAttribute(
            'src', `../stocks/${characters[i].name}/${characters[i].icon}`
        );
        stockIcon.classList.add('stock-icon');
        stockContainer.appendChild(stockIcon);
        playersContainer.appendChild(stockContainer);
    }
    matchContainer.appendChild(playersContainer);
}

function createStatsButton(matchContainer){
    let button = document.createElement('button');
    button.classList.add('stats-button');
    let icon = document.createElement('img');
    icon.setAttribute('src', '../assets/icons/graph.svg');
    icon.classList.add('stats-button-icon');
    button.appendChild(icon);
    matchContainer.appendChild(button);
}