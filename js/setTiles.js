const fs = require('fs');
let SC = require('../SlippiCollection.js');

let container = document.getElementById('page-container');
const slippiPath = "C:/Users/Red Baron/Desktop/FM-v5.9-Slippi-r18-Win/Slippi/";

let slippiFiles = fs.readdirSync(slippiPath, function(err, files){
    if(err){
        return console.log("Unable to scan directory " + err);
    }
});


let fileCollection = [];
for(let i = 0; i < slippiFiles.length; i++){
    let filePath = slippiPath + slippiFiles[i];
    let settings = SC.readSlippiSettings(slippiPath + slippiFiles[i]);
    let stats = SC.readSlippiStats(filePath);
    let winner = SC.getMatchWinner(stats);
    createMatch(i, settings, winner);
    fileCollection.push(filePath);
}
sessionStorage.setItem('fileCollection', JSON.stringify(fileCollection));


function createMatch(matchId, data, winner){
    let matchContainer = document.createElement('div');
    let stage = SC.getMatchStage(data);
    matchContainer.style.backgroundImage = `url('../stages/${stage.image}')`;
    matchContainer.classList.add("match-container");
    createPlayers(data, winner, matchContainer);

    let infoContainer = document.createElement('div');
    infoContainer.classList.add('info-container');

    createStatsButton(matchId, infoContainer);
    createGameMode(data, infoContainer);

    matchContainer.append(infoContainer);
    container.appendChild(matchContainer);
}

function createPlayers(data, winner, matchContainer){
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
        if(winner == characters[i].playerIndex){
            stockContainer.classList.add('match-winner');
        }
        stockContainer.appendChild(stockIcon);
        playersContainer.appendChild(stockContainer);
    }
    matchContainer.appendChild(playersContainer);
}

function createStatsButton(matchId, infoContainer){
    let button = document.createElement('button');
    button.classList.add('stats-button');
    button.setAttribute('value', matchId);
    button.setAttribute('onclick', 'openMatchBreakdown(this)');
    let icon = document.createElement('img');
    icon.setAttribute('src', '../assets/icons/graph.svg');
    icon.classList.add('stats-button-icon');
    button.appendChild(icon);
    infoContainer.appendChild(button);
}

function createGameMode(data, infoContainer){
    let gamemodeTag = document.createElement('div');
    gamemodeTag.classList.add('gamemode-tag');
    let mode = SC.getGamemode(data);
    let text = document.createTextNode(mode);
    gamemodeTag.append(text);
    infoContainer.append(gamemodeTag);
}

function openMatchBreakdown(elm){
    sessionStorage.setItem('match-breakdown-index', elm.value);
    window.location.assign('./match.html');
}