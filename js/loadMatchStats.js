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

setConversionTables(characters);
createConversionsList(conversions, characters);

//Remove load
document.getElementById("page-loading-display").style.display = "none";




function removeDash(string) {
    string = string.replace("-", " ");
    return string;
}

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

function createConversionsList(match, characters) {
    let container = document.getElementById("player1-conversions-list");
    let stocks = match.player1.stocks;

    setPlayerConversions(container, stocks);
    container = document.getElementById("player3-conversions-list");
    stocks = match.player3.stocks;
    setPlayerConversions(container, stocks);


    function setPlayerConversions(container, stocks) {
        // Loop through a players stock interactions
        for (let i = 0; i < stocks.length; i++) {
            let indexContainer = document.createElement('div');
            indexContainer.classList.add("stock-conversions");

            // Loop through conversions for each stock interaction
            stocks[i].conversions.forEach(index => {
                let conversionContainer = document.createElement('div');
                conversionContainer.classList.add("conversion");

                let conversionOpening = document.createElement('h2');
                conversionOpening.classList.add("conversion-opening-label");
                let openingText = document.createTextNode(removeDash(index.opening));
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
                damgageDoneLabel.classList.add("conversion-damage-label");
                let damageText = document.createTextNode(`${Math.round(index.damage_done)}%`);
                damgageDoneLabel.appendChild(damageText);
                conversionContainer.appendChild(damgageDoneLabel);

                if (index.didKill) {
                    let koLabel = document.createElement('h2');
                    koLabel.classList.add("ko-label");
                    koLabel.appendChild(document.createTextNode("K.O."));
                    conversionContainer.appendChild(koLabel);
                }

                indexContainer.appendChild(conversionContainer);

            });

            let opponentIconContainer = document.createElement("div");
            opponentIconContainer.classList.add("opponent-icon-container");
            let opponentIcon = document.createElement("img");
            opponentIcon.classList.add("opponent-icon");
            let opponent;
            for (let j = 0; j < characters.length; j++) {
                if (stocks[i].opponentIndex == characters[j].playerIndex) {
                    opponent = characters[j];
                }
            }
            opponentIcon.setAttribute("src", `../stocks/${opponent.name}/${opponent.icon}`);
            opponentIconContainer.appendChild(opponentIcon);
            container.appendChild(opponentIconContainer);

            container.appendChild(indexContainer);
            let hr = document.createElement("hr");
            container.appendChild(hr);
        }
    }
}

function setConversionTables(characters) {
    let container = document.getElementById("main-data-container");

    for (let i = 0; i < characters.length; i++) {
        let port = characters[i].port;

        let playerContainer = document.createElement("div");
        playerContainer.classList.add("player-data-container");
        playerContainer.setAttribute("id", `player${(characters[i].playerIndex + 1)}-data-container`);

        let playerSlot = document.createElement("div");
        playerSlot.classList.add("player-slot-container");
        let slotIcon = document.createElement("img");
        slotIcon.setAttribute("src", `../stocks/${characters[i].name}/${characters[i].icon}`);
        slotIcon.classList.add("slot-icon");
        slotIcon.setAttribute("id", `slot-icon-${port}`);
        playerSlot.appendChild(slotIcon);

        let slotTitle = document.createElement("h1");
        slotTitle.classList.add("slot-title");
        slotTitle.setAttribute("id", `slot-title-${port}`);
        slotTitle.appendChild(document.createTextNode(`Player ${port}`));
        playerSlot.appendChild(slotTitle);

        playerContainer.appendChild(playerSlot);

        let conversionList = document.createElement("div");
        conversionList.classList.add("conversions-lists");
        conversionList.setAttribute("id", `player${port}-conversions-list`)
        playerContainer.appendChild(conversionList);

        container.appendChild(playerContainer);

    }
}