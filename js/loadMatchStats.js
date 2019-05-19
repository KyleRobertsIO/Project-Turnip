let SC = require('../SlippiCollection.js');

let index = sessionStorage.getItem('match-breakdown-index');
let fileCollection = JSON.parse(sessionStorage.getItem('fileCollection'));
let filePath = fileCollection[index];

let settings = SC.readSlippiSettings(filePath);
let stats = SC.readSlippiStats(filePath);

let stageImage = SC.getMatchStage(settings);
let characters = SC.getMatchCharcters(settings);
let matchKills = SC.getKillCounts(stats);
let matchDamageDone = SC.getPercentageDone(stats);
let winner = SC.getMatchWinner(stats);


console.log(SC.getMatchConversions(stats));


let headerLeft = document.getElementById('stage-image-container');
setStageBackground(stageImage.image, headerLeft);
setCharacterIcons(characters, headerLeft, winner);
setBasicInformation(characters, matchKills, matchDamageDone);

//Remove load
document.getElementById("page-loading-display").style.display = "none";

function setStageBackground(image, container){
    let path = `url('../stages/${image}')`;
    container.style.backgroundImage = path;
}

function setCharacterIcons(characters, container, winner){
    for(let i = 0; i < characters.length; i++){
        let icon = document.createElement('img');
        icon.setAttribute('src', `../stocks/${characters[i].name}/${characters[i].icon}`);
        icon.classList.add('character-icon');
        let iconContainer = document.createElement('div');
        iconContainer.classList.add('character-icon-container');
        iconContainer.appendChild(icon);
        if((winner) === i){
            iconContainer.classList.add("winner-icon-container");
        }else{
            iconContainer.classList.add("loser-icon-container");
        }
        container.appendChild(iconContainer);
    }
}

function setBasicInformation(characters, matchKills, matchDamageDone){
    for(let i = 0; i < characters.length; i++){
        let stockContainer = document.getElementById(`basic-character-${(i + 1)}`);
        let stockIcon = document.createElement("img");
        stockIcon.classList.add("basic-stock-icon");
        stockIcon.setAttribute("src", `../stocks/${characters[i].name}/${characters[i].icon}`);
        stockContainer.appendChild(stockIcon);

        let killValue = document.getElementById(`basic-kills-player-${(i + 1)}`);
        if(matchKills != null){
            killValue.innerText = matchKills[i].kills;
        }else{
            killValue.innerText = 0;
        }

        let percentValue = document.getElementById(`basic-percent-player-${(i + 1)}`);
        if(matchDamageDone != null){
            percentValue.innerText = matchDamageDone[i].percent_done;
        }else{
            percentValue.innerText = 0;
        }
    }
}