function gameObject() {
    return {
        homeTeam: {
            teamName: "Brooklyn Nets",
            colors: ["Black", " White"],
            players: {
                "Alan Anderson" : {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,            
                },
                "Reggie Evans":{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 17, 
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15, 
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5, 
                },
                "Jason Terry":{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1, 
                },
            }

        },

    awayTeam: {
        teamName: "Charlotte Hornets",
            colors: ["Turquoise", " Purple"],
            players: {
                "Jeff Adrien" : {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,            
                },
                "Bismak Biyombo" : {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,            
                },
                "DeSagna Diop" : {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,            
                },
                "Ben Gordon" : {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,            
                },
                "Brendan Haywood" : {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,            
                },
    },
}
    }
}

const game = gameObject();

function numPointsScored(playerName){
    for (const team in game) {
        for(const teamProp  in game[team]){
            if (typeof game[team][teamProp] === "object"){
                for (const player in game[team][teamProp]){
                    if (player === playerName) return game[team][teamProp][player].points;
                }
            }
        }
    }

}

function shoeSize(playerName){
    for (const team in game){
        for (const teamProp in game[team]){
            if (typeof game[team][teamProp] === "object"){
                for (const player in game[team][teamProp]){
                    if (player === playerName) return game[team][teamProp][player].shoe;
                }
            }
        }
    }
}

function teamColors(searchTeam){
    for (const team in game){
        for (const teamProp in game[team]){
            if (game[team].teamName === searchTeam){
                return game[team].colors;
            }
        }
    }
}

function teamNames() {
    const arr = [];
    for (const team in game){
        arr.push(game[team].teamName)
    }
    return arr
}

function playerNumbers (putTeamName){
    const arr = [];
    for (const team in game){
        if (game[team].teamName === putTeamName){
            for (const player in game[team].players){
                arr.push(game[team].players[player].number)
            }
            
        }
    }
    return arr
}

function playerStats(playersName){
    for (const team in game){
        for (const player in game[team].players){
            if (player === playersName)
            return game[team].players[player]
        }
    }    
}

function biggestShoeSize(){
    let focalSize = 0;
    let focalPlayer = "";
    for (const team in game){
        for (const player in game[team].players){
            if (game[team].players[player].shoe > focalSize){
                focalSize = game[team].players[player].shoe;
                focalPlayer = player;
            }
        }
    }
    return focalPlayer;
}

biggestShoeSize();

const PlayerWithBiggestSize = biggestShoeSize();

function bigShoeRebounds(){
    for (const team in game){
        for (const player in game[team].players){
            if (player === PlayerWithBiggestSize)
            return game[team].players[player].rebounds;
        }
    }
}

