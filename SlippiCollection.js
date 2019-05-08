const { default: SlippiGame } = require('slp-parser-js');

module.exports = {
    readSlippiSettings: function (path) {
        let game = new SlippiGame(path);
        let settings = game.getSettings();
        return settings;
    },
    readSlippiStats: function (path){
        let game = new SlippiGame(path);
        let stats = game.getStats();
        return stats;
    },
    getMatchCharcters: function (settings) {
        let characters = [];
        for (let i = 0; i < settings.players.length; i++) {
            let id = settings.players[i].characterId;
            let colorId = settings.players[i].characterColor;
            let obj = getCharacter(id, colorId);
            let character = {
                playerIndex: settings.players[i].playerIndex,
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
    },
    getMatchWinner: function(stats){
        let winnerIndex = getWinnerId(stats.stocks);
        return winnerIndex;
    },   
    getKillCounts: function(stats){
        let kills = [];
        for(let i = 0; i < stats.overall.length; i++){
            let kill = {
                playerIndex: stats.overall[i].playerIndex,
                kills: stats.overall[i].killCount
            }
            kills.push(kill);
        }
        return kills;
    }
}

function getWinnerId(stocks){
    let winner = null;
    for(let i = 0; i < stocks.length; i++){
        if(stocks[i].deathAnimation == null){
            winner = stocks[i].playerIndex;
        }
    }
    return winner;
}

function getCharacter(id, colorId) {
    let name = "";
    let icon = "";
    switch (id) {
        case 0:
            name = "CaptainFalcon";
            icon = `${colorId}.png`;
            break;
        case 1:
            name = "DonkeyKong";
            icon = `${colorId}.png`;
            break;
        case 2:
            name = "Fox";
            icon = `${colorId}.png`;
            break;
        case 3:
            name = "Game&Watch";
            icon = `${colorId}.png`;
            break;
        case 4:
            name = "Kirby";
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
            name = "Luigi";
            icon = `${colorId}.png`;
            break;
        case 8:
            name = "Mario";
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
            name = "IceClimbers";
            icon = `${colorId}.png`;
            break;
        case 15:
            name = "Jigglypuff";
            icon = `${colorId}.png`;
            break;
        case 16:
            name = "Samus";
            icon = `${colorId}.png`;
            break;
        case 17:
            name = "Yoshi";
            icon = `${colorId}.png`;
            break;
        case 18:
            name = "Zelda";
            icon = `${colorId}.png`;
            break;
        case 19:
            name = "Sheik";
            icon = `${colorId}.png`;
            break;
        case 20:
            name = "Falco";
            icon = `${colorId}.png`;
            break;
        case 21:
            name = "YoungLink";
            icon = `${colorId}.png`;
            break;
        case 22:
            name = "DrMario";
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
    let image = "";
    switch (id) {
        case 2:
            name = "Fountain of Dreams";
            image = "FountainOfDreams.png";
            break;
        case 3:
            name = "Pokemon Stadium";
            image = "PokemonStadium.png";
            break;
        case 4:
            name = "Princess Peach's Castle";
            image = "PrincessPeachsCastle.jpg";
            break;
        case 5:
            name = "Kongo Falls";
            image = "KongoFalls.jpg";
            break;
        case 6:
            name = "Brinstar";
            image = "Brinstar.jpg";
            break;
        case 7:
            name = "Corneria";
            image = "Corneria.jpg";
            break;
        case 8:
            name = "Yoshi's Story";
            image = "YoshisStory.png";
            break;
        case 9:
            name = "Onett";
            image = "Onett.jpg";
            break;
        case 10:
            name = "Mute City";
            image = "MuteCity.jpg";
            break;
        case 11:
            name = "Rainbow Cruise";
            image = "RainbowCrusie.png";
            break;
        case 12:
            name = "Jungle Japes";
            image = "JungleJapes.png";
            break;
        case 13:
            name = "Great Bay";
            image = "GreatBay.jpg";
            break;
        case 14:
            name = "Temple";
            image = "Temple.png";
            break;
        case 15:
            name = "Brinstar Depths";
            image = "BrinstarDepths.jpg";
            break;
        case 16:
            name = "Yoshi's Island";
            image = "YoshisIslandMelee.jpg";
            break;
        case 17:
            name = "Green Greens";
            image = "GreenGreens.png";
            break;
        case 18:
            name = "Fourside";
            image = "Fourside.png";
            break;
        case 19:
            name = "Mushroom Kingdom";
            image = "MushroomKingdom.png";
            break;
        case 20:
            name = "Mushroom Kingdom 2";
            image = "MushroomKingdom2.png";
            break;
        case 22:
            name = "Venom";
            image = "Venom.png";
            break;
        case 23:
            name = "Poke Floats";
            image = "PokeFloats.jpg";
            break;
        case 24:
            name = "Big Blue";
            image = "BigBlue.jpg";
            break;
        case 25:
            name = "Icicle Mountain";
            image = "IcicleMountain.jpg";
            break;
        case 27:
            name = "Flat Zone";
            image = "FlatZone.png";
            break;
        case 28:
            name = "Dream Land";
            image = "DreamLand.png";
            break;
        case 29:
            name = "Yoshi's Island";
            image = "YoshisIsland.png";
            break;
        case 30:
            name = "Kongo Jungle";
            image = "KongoJungle.png";
            break;
        case 31:
            name = "Battlefield";
            image = "Battlefield.jpg";
            break;
        case 32:
            name = "Final Destination";
            image = "FinalDestination.png";
            break;
    }
    return obj = {
        name: name,
        image: image
    };
}