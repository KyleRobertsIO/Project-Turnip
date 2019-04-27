const { default: SlippiGame } = require('slp-parser-js');

module.exports = {
    readSlippiSettings: function (path) {
        let game = new SlippiGame(path);
        let settings = game.getSettings();
        return settings;
    },
    getMatchCharcters: function (settings) {
        let characters = [];
        for (let i = 0; i < settings.players.length; i++) {
            let id = settings.players[i].characterId;
            let colorId = settings.players[i].characterColor;
            let obj = getCharacter(id, colorId);
            let character = {
                id: id,
                port: settings.players[i].port,
                name: obj.name,
                color: colorId,
                icon: obj.icon
            }
            characters.push(character);
        }
        return characters;
    },
    getMatchStage: function (settings) {
        let id = settings.stageId;
        return getStage(id);
    },
    getGamemode: function (settings) {
        let mode = ""
        if (settings.isTeams == true) {
            mode = "Teams";
        } else {
            if (settings.players.length > 2) {
                mode = "Free-For-All";
            } else {
                mode = "Singles";
            }
        }
        return mode;
    }
}

function getCharacter(id, colorId) {
    let name = "";
    let icon = "";
    switch (id) {
        case 0:
            name = "Captain Falcon";
            icon = `${colorId}.png`;
            break;
        case 1:
            name = "Yoshi";
            icon = `${colorId}.png`;
            break;
        case 2:
            name = "Falco";
            icon = `${colorId}.png`;
            break;
        case 3:
            name = "Mr. Game & Watch";
            icon = `${colorId}.png`;
            break;
        case 4:
            name = "Samus";
            icon = `${colorId}.png`;
            break;
        case 5:
            name = "Bowser";
            icon = `${colorId}.png`;
            break;
        case 6:
            name = "Link";
            icon = `${colorId}.png`;
            break;
        case 7:
            name = "Mario";
            icon = `${colorId}.png`;
            break;
        case 8:
            name = "Luigi";
            icon = `${colorId}.png`;
            break;
        case 9:
            name = "Marth";
            icon = `${colorId}.png`;
            break;
        case 10:
            name = "Mewtwo";
            icon = `${colorId}.png`;
            break;
        case 11:
            name = "Ness";
            icon = `${colorId}.png`;
            break;
        case 12:
            name = "Peach";
            icon = `${colorId}.png`;
            break;
        case 13:
            name = "Pikachu";
            icon = `${colorId}.png`;
            break;
        case 14:
            name = "Ice Climbers";
            icon = `${colorId}.png`;
            break;
        case 15:
            name = "Jigglypuff";
            icon = `${colorId}.png`;
            break;
        case 16:
            name = "Kirby";
            icon = `${colorId}.png`;
            break;
        case 17:
            name = "Donkey Kong";
            icon = `${colorId}.png`;
            break;
        case 18:
            name = "Zelda";
            icon = `${colorId}.png`;
            break;
        case 19:
            name = "Shiek";
            icon = `${colorId}.png`;
            break;
        case 20:
            name = "Fox";
            icon = `${colorId}.png`;
            break;
        case 21:
            name = "Young Link";
            icon = `${colorId}.png`;
            break;
        case 22:
            name = "Dr. Mario";
            icon = `${colorId}.png`;
            break;
        case 23:
            name = "Roy";
            icon = `${colorId}.png`;
            break;
        case 24:
            name = "Pichu";
            icon = `${colorId}.png`;
            break;
        case 25:
            name = "Ganondorf";
            icon = `${colorId}.png`;
            break;
    }
    return obj = {
        name: name,
        icon: icon
    };
}

function getStage(id) {
    let name = "";
    switch (id) {
        case 2:
            name = "Fountain of Dreams";
            break;
        case 3:
            name = "Pokemon Stadium";
            break;
        case 4:
            name = "Princess Peach's Castle";
            break;
        case 5:
            name = "Konga Jungle";
            break;
        case 6:
            name = "Brinstar";
            break;
        case 7:
            name = "Corneria";
            break;
        case 8:
            name = "Yoshi's Story";
            break;
        case 9:
            name = "Onett";
            break;
        case 10:
            name = "Mute City";
            break;
        case 11:
            name = "Rainbow Cruise";
            break;
        case 12:
            name = "Jungle Japes";
            break;
        case 13:
            name = "Great Bay";
            break;
        case 14:
            name = "Temple";
            break;
        case 15:
            name = "Brinstar Depths";
            break;
        case 16:
            name = "Yoshi's Island";
            break;
        case 17:
            name = "Green Greens";
            break;
        case 18:
            name = "Fourside";
            break;
        case 19:
            name = "Kingdom";
            break;
        case 20:
            name = "Kingdom 2";
            break;
        case 22:
            name = "Venom";
            break;
        case 23:
            name = "Poke Floats";
            break;
        case 24:
            name = "Big Blue";
            break;
        case 25:
            name = "Icicle Mountain";
            break;
        case 27:
            name = "Flat Zone";
            break;
        case 28:
            name = "Dream Land";
            break;
        case 29:
            name = "Yoshi's Island 2";
            break;
        case 30:
            name = "Kongo Jungle 2";
            break;
        case 31:
            name = "BattleField";
            break;
        case 32:
            name = "Final Destination";
            break;
    }
    return name;
}