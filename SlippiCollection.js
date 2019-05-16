const { default: SlippiGame } = require('slp-parser-js');

module.exports = {
    readSlippiSettings: function (path) {
        let game = new SlippiGame(path);
        let settings = game.getSettings();
        return settings;
    },
    readSlippiStats: function (path) {
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
    getMatchWinner: function (stats) {
        let winnerIndex = getWinnerId(stats.stocks);
        return winnerIndex;
    },
    getKillCounts: function (stats) {
        let kills = [];
        if (stats.overall.length != 0) {
            for (let i = 0; i < stats.overall.length; i++) {
                let kill = {
                    playerIndex: stats.overall[i].playerIndex,
                    kills: stats.overall[i].killCount
                }
                kills.push(kill);
            }
        } else {
            kills = null;
        }
        return kills;
    },
    getPercentageDone: function (stats) {
        let percentages = [];
        if (stats.overall.length != 0) {
            for (let i = 0; i < stats.overall.length; i++) {
                let percent = {
                    playerIndex: stats.overall[i].playerIndex,
                    percent_done: Math.round(stats.overall[i].totalDamage)
                }
                percentages.push(percent);
            }
        } else {
            percentages = null;
        }
        return percentages;
    },
    getMoveInfo: function(moveId){
        const moves = {
            1: {
              // This includes all thrown items, zair, luigi's taunt, samus bombs, etc
              id: 1,
              name: "Miscellaneous",
              shortName: "misc",
            },
            2: {
              id: 2,
              name: "Jab",
              shortName: "jab",
            },
            3: {
              id: 3,
              name: "Jab",
              shortName: "jab",
            },
            4: {
              id: 4,
              name: "Jab",
              shortName: "jab",
            },
            5: {
              id: 5,
              name: "Rapid Jabs",
              shortName: "rapid-jabs",
            },
            6: {
              id: 6,
              name: "Dash Attack",
              shortName: "dash",
            },
            7: {
              id: 7,
              name: "Forward Tilt",
              shortName: "ftilt",
            },
            8: {
              id: 8,
              name: "Up Tilt",
              shortName: "utilt",
            },
            9: {
              id: 9,
              name: "Down Tilt",
              shortName: "dtilt",
            },
            10: {
              id: 10,
              name: "Forward Smash",
              shortName: "fsmash",
            },
            11: {
              id: 11,
              name: "Up Smash",
              shortName: "usmash",
            },
            12: {
              id: 12,
              name: "Down Smash",
              shortName: "dsmash",
            },
            13: {
              id: 13,
              name: "Neutral Air",
              shortName: "nair",
            },
            14: {
              id: 14,
              name: "Forward Air",
              shortName: "fair",
            },
            15: {
              id: 15,
              name: "Back Air",
              shortName: "bair",
            },
            16: {
              id: 16,
              name: "Up Air",
              shortName: "uair",
            },
            17: {
              id: 17,
              name: "Down Air",
              shortName: "dair",
            },
            18: {
              id: 18,
              name: "Neutral B",
              shortName: "neutral-b",
            },
            19: {
              id: 19,
              name: "Side B",
              shortName: "side-b",
            },
            20: {
              id: 20,
              name: "Up B",
              shortName: "up-b",
            },
            21: {
              id: 21,
              name: "Down B",
              shortName: "down-b",
            },
            50: {
              id: 50,
              name: "Getup Attack",
              shortName: "getup",
            },
            51: {
              id: 51,
              name: "Getup Attack (Slow)",
              shortName: "getup-slow",
            },
            52: {
              id: 52,
              name: "Grab Pummel",
              shortName: "pummel",
            },
            53: {
              id: 53,
              name: "Forward Throw",
              shortName: "fthrow",
            },
            54: {
              id: 54,
              name: "Back Throw",
              shortName: "bthrow",
            },
            55: {
              id: 55,
              name: "Up Throw",
              shortName: "uthrow",
            },
            56: {
              id: 56,
              name: "Down Throw",
              shortName: "dthrow",
            },
            61: {
              id: 61,
              name: "Edge Attack (Slow)",
              shortName: "edge-slow",
            },
            62: {
              id: 62,
              name: "Edge Attack",
              shortName: "edge",
            },
          };
        return moves[moveId];
    }
}

function getWinnerId(stocks) {
    let winner = null;
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].deathAnimation == null) {
            winner = stocks[i].playerIndex;
        }
    }
    return winner;
}

function getCharacter(id, colorId) {
    let name = "";
    let icon = "";
    let dName = "";
    switch (id) {
        case 0:
            dName = "Captain Falcon";
            name = "CaptainFalcon";
            icon = `${colorId}.png`;
            break;
        case 1:
            dName = "Donkey Kong";
            name = "DonkeyKong";
            icon = `${colorId}.png`;
            break;
        case 2:
            dname = "Fox";
            name = "Fox";
            icon = `${colorId}.png`;
            break;
        case 3:
            dName = "Mr. Game & Watch";
            name = "Game&Watch";
            icon = `${colorId}.png`;
            break;
        case 4:
            dName = "Kirby";
            name = "Kirby";
            icon = `${colorId}.png`;
            break;
        case 5:
            dName = "Bowser";
            name = "Bowser";
            icon = `${colorId}.png`;
            break;
        case 6:
            dName = "Link";
            name = "Link";
            icon = `${colorId}.png`;
            break;
        case 7:
            dName = "Luigi";
            name = "Luigi";
            icon = `${colorId}.png`;
            break;
        case 8:
            dName = "Mario";
            name = "Mario";
            icon = `${colorId}.png`;
            break;
        case 9:
            dName = "Marth";
            name = "Marth";
            icon = `${colorId}.png`;
            break;
        case 10:
            dName = "Mewtwo";
            name = "Mewtwo";
            icon = `${colorId}.png`;
            break;
        case 11:
            dName = "Ness";
            name = "Ness";
            icon = `${colorId}.png`;
            break;
        case 12:
            dName = "Peach";
            name = "Peach";
            icon = `${colorId}.png`;
            break;
        case 13:
            dName = "Pikachu";
            name = "Pikachu";
            icon = `${colorId}.png`;
            break;
        case 14:
            dName = "Ice Climbers";
            name = "IceClimbers";
            icon = `${colorId}.png`;
            break;
        case 15:
            dName = "Jigglypuff";
            name = "Jigglypuff";
            icon = `${colorId}.png`;
            break;
        case 16:
            dName = "Samus";
            name = "Samus";
            icon = `${colorId}.png`;
            break;
        case 17:
            dName = "Yoshi";
            name = "Yoshi";
            icon = `${colorId}.png`;
            break;
        case 18:
            dName = "Zelda";
            name = "Zelda";
            icon = `${colorId}.png`;
            break;
        case 19:
            dName = "Sheik";
            name = "Sheik";
            icon = `${colorId}.png`;
            break;
        case 20:
            dName = "Falco";
            name = "Falco";
            icon = `${colorId}.png`;
            break;
        case 21:
            dName = "Young Link";
            name = "YoungLink";
            icon = `${colorId}.png`;
            break;
        case 22:
            dName = "Dr. Mario";
            name = "DrMario";
            icon = `${colorId}.png`;
            break;
        case 23:
            dName = "Roy";
            name = "Roy";
            icon = `${colorId}.png`;
            break;
        case 24:
            dName = "Pichu";
            name = "Pichu";
            icon = `${colorId}.png`;
            break;
        case 25:
            dName = "Ganondorf";
            name = "Ganondorf";
            icon = `${colorId}.png`;
            break;
    }
    return obj = {
        display_name: dName,
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