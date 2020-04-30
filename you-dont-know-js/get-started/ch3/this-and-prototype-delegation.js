var player = {
    showRecord(playerName) {
        console.log(`${ playerName } is ranked as ${ this.rank }`);
    }
}

var newbie = Object.create(player);
newbie.rank = "silver";

var expert = Object.create(player);
expert.rank = "global elite";


newbie.showRecord("Charles");
expert.showRecord("NadeKing");
