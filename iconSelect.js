module.exports = {
    getCharacter: function(id){
        let name = "";
        switch(id){
            case 0:
                name = "Captain Falcon";
            break;
            case 1:
                name = "Yoshi";
            break;
            case 2:
                name = "Falco";
            break;
            case 3:
                name = "Mr. Game & Watch";
            break;
            case 4:
                name = "Samus";
            break;
            case 5:
                name = "Bowser";
            break;
            case 6:
                name = "Link";
            break;
            case 7:
                name = "Mario";
            break;
            case 8:
                name = "Luigi";
            break;
            case 9:
                name = "Marth";
            break;
            case 10:
                name = "Mewtwo";
            break;
            case 11:
                name = "Ness";
            break;
            case 12:
                name = "Peach";
            break;
            case 13:
                name = "Pikachu";
            break;
            case 14:
                name = "Ice Climbers";
            break;
            case 15:
                name = "Jigglypuff";
            break;
            case 16:
                name = "Kirby";
            break;
            case 17:
                name = "Donkey Kong";
            break;
            case 18:
                name = "Zelda";
            break;
            case 19:
                name = "Shiek";
            break;
            case 20:
                name = "Fox";
            break;
            case 21:
                name = "Young Link";
            break;
            case 22:
                name = "Dr. Mario";
            break;
            case 23:
                name = "Roy";
            break;
            case 24:
                name = "Pichu";
            break;
            case 25:
                name = "Ganondorf";
            break;
        }
        return name;
    },

    getStage: function(id){
        let name = "";
        switch(id){
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
}
