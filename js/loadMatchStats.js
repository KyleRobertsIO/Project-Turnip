let SC = require('../SlippiCollection.js');

let index = sessionStorage.getItem('match-breakdown-index');
let fileCollection = JSON.parse(sessionStorage.getItem('fileCollection'));
let filePath = fileCollection[index];

let settings = SC.readSlippiSettings(filePath);
let stats = SC.readSlippiStats(filePath);

let characters = SC.getMatchCharcters(settings);
let matchKills = SC.getKillCounts(stats);

let headerLeft = document.getElementById('stage-image-container');
setCharacterIcons(characters, headerLeft);
setBasicInformation(characters, matchKills);

function setCharacterIcons(characters, container){
    for(let i = 0; i < characters.length; i++){
        let icon = document.createElement('img');
        icon.setAttribute('src', `../stocks/${characters[i].name}/${characters[i].icon}`);
        icon.classList.add('character-icon');
        let iconContainer = document.createElement('div');
        iconContainer.classList.add('character-icon-container');
        iconContainer.appendChild(icon);
        container.appendChild(iconContainer);
    }
}

function setBasicInformation(characters, matchKills){
    for(let i = 0; i < characters.length; i++){
        let stockContainer = document.getElementById(`basic-character-${(i + 1)}`);
        let stockIcon = document.createElement("img");
        stockIcon.classList.add("basic-stock-icon");
        stockIcon.setAttribute("src", `../stocks/${characters[i].name}/${characters[i].icon}`);
        stockContainer.appendChild(stockIcon);

        let killValue = document.getElementById(`basic-kills-player-${(i + 1)}`);
        killValue.innerText = matchKills[i].kills;
    }
}