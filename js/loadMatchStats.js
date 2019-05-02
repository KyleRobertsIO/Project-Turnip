let SC = require('../SlippiCollection.js');

let index = sessionStorage.getItem('match-breakdown-index');
let fileCollection = JSON.parse(sessionStorage.getItem('fileCollection'));
let filePath = fileCollection[index];

console.log(fileCollection[index]);

let settings = SC.readSlippiSettings(filePath);
let characters = SC.getMatchCharcters(settings);

let headerLeft = document.getElementById('stage-image-container');
setCharacterIcons(characters, headerLeft);

console.log(characters);

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