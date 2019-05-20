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
let conversions = SC.getMatchConversions(stats);

//console.log(SC.getMatchConversions(stats));


let headerLeft = document.getElementById('stage-image-container');
setStageBackground(stageImage.image, headerLeft);
setCharacterIcons(characters, headerLeft, winner);
setBasicInformation(characters, matchKills, matchDamageDone);
createConversionsList(conversions);

//Remove load
document.getElementById("page-loading-display").style.display = "none";








function setStageBackground(image, container) {
    let path = `url('../stages/${image}')`;
    container.style.backgroundImage = path;
}

function setCharacterIcons(characters, container, winner) {
    for (let i = 0; i < characters.length; i++) {
        let icon = document.createElement('img');
        icon.setAttribute('src', `../stocks/${characters[i].name}/${characters[i].icon}`);
        icon.classList.add('character-icon');
        let iconContainer = document.createElement('div');
        iconContainer.classList.add('character-icon-container');
        iconContainer.appendChild(icon);
        if ((winner) === i) {
            iconContainer.classList.add("winner-icon-container");
        } else {
            iconContainer.classList.add("loser-icon-container");
        }
        container.appendChild(iconContainer);
    }
}

function setBasicInformation(characters, matchKills, matchDamageDone) {
    for (let i = 0; i < characters.length; i++) {
        let stockContainer = document.getElementById(`basic-character-${(i + 1)}`);
        let stockIcon = document.createElement("img");
        stockIcon.classList.add("basic-stock-icon");
        stockIcon.setAttribute("src", `../stocks/${characters[i].name}/${characters[i].icon}`);
        stockContainer.appendChild(stockIcon);

        let killValue = document.getElementById(`basic-kills-player-${(i + 1)}`);
        if (matchKills != null) {
            killValue.innerText = matchKills[i].kills;
        } else {
            killValue.innerText = 0;
        }

        let percentValue = document.getElementById(`basic-percent-player-${(i + 1)}`);
        if (matchDamageDone != null) {
            percentValue.innerText = matchDamageDone[i].percent_done;
        } else {
            percentValue.innerText = 0;
        }
    }
}

function createConversionsList(match) {
    let container = document.getElementById("player1-conversions-list");
    let stocks = match.player1.stocks;

    // Loop through a players stock interactions
    for (let i = 0; i < stocks.length; i++) {
        console.log(stocks[i]);
        let indexContainer = document.createElement('div');
        indexContainer.classList.add("stock-conversions");
        // Loop through conversions for each stock interaction
        stocks[i].conversions.forEach(index => {
            let conversionContainer = document.createElement('div');
            conversionContainer.classList.add("conversion");

            let conversionOpening = document.createElement('h2');
            let openingText = document.createTextNode(index.opening);
            conversionOpening.appendChild(openingText);
            conversionContainer.appendChild(conversionOpening);

            let movesTitle = document.createElement("h2");
            movesTitle.classList.add("moves-list-title");
            movesTitle.appendChild(document.createTextNode("Moves Used:"));
            conversionContainer.appendChild(movesTitle);
            let moveList = document.createElement("ul");
            moveList.classList.add("conversion-move-list");
            // Create a move list for a conversion
            index.moves.forEach(move => {
                let moveListing = document.createElement("li");
                let moveName = document.createTextNode(move);
                moveListing.appendChild(moveName);
                moveList.appendChild(moveListing);
            });
            conversionContainer.appendChild(moveList);
            

            let damgageDoneLabel = document.createElement('h2');
            let damageText = document.createTextNode(`${Math.round(index.damage_done)}%`);
            damgageDoneLabel.appendChild(damageText);
            conversionContainer.appendChild(damgageDoneLabel);

            indexContainer.appendChild(conversionContainer);

        });
        let hr = document.createElement("hr");
        indexContainer.appendChild(hr);
        container.appendChild(indexContainer);
    }
}