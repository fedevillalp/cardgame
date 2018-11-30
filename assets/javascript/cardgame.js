// 1 --> Main Menu , 2 --> Select Defender 3--> Play
var gameState = 1;

//All Characters have the same attribute therefore we create a Character class
 class Character {

    constructor(name, healthPoints, attackPower, counterPower){
         this.name = name;
         this.healthPoints = healthPoints;
         this.attackPower = attackPower;
         this.counterPower = counterPower;

         this.isAttacker = false;
         this.isAlive = true;
         this.isProbableDefender = false;
         this.isDefender = false;
    }

    status(){
        var status = {
            name: this.name,
            healthPoints: this.healthPoints,
            attackPower: this.attackPower,
            counterPower: this.counterPower,

            isAttacker: this.isAttacker,
            isAlive: this.isAlive,
            isProbableDefender: this.isProbableDefender,
            isDefender: this.isDefender,
        }
        //console.log(status);
        return status;
    }

    updateStatus(healthPoints, attackPower){
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
    }

    selectAttacker(){
        this.isAttacker = true;
        console.log("this.selectAttacker: " + this.isAttacker);
    }

    setProbableDefender(){
        this.isProbableDefender=true;
    }

    removeProbableDefender(){
        this.isProbableDefender=false;
    }

    setDefender(){
        this.isDefender=true;
    }

    setHP(healthPoints){
        this.healthPoints= healthPoints;
        console.log("This is setHP the current HP is: " + this.healthPoints);
    }

    kill(){
        this.isAlive = false;
        this.isDefender = false;
        console.log("This is KILL you killed: "+this.name);
    }

    setAttackPower(attackPower){
        this.attackPower = attackPower;
        console.log("This is SetAttacker, You set attack power to :" + this.attackPower)
    }

}

//Create four Characters
var character1 = new Character("one",50,10,10);
var character2 = new Character("two",60,20,20);
var character3 = new Character("three",80,30,30);
var character4 = new Character("four",70,40,40);

//Array of all Characters
var players = [character1,character2,character3,character4];

//Draw Main Menu
$(document ).ready(function(){

    printPlayers(players);
         
    $(".container").on("click", "#one",function() {
        
        switch (gameState) {
            case 1:
                character1.selectAttacker();
                    character2.setProbableDefender();
                    character3.setProbableDefender();
                    character4.setProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 2
                console.log("one clicked and CASE 1");
                console.log("Game State"+ gameState);
            break;
        
            case 2:
                if(!character1.isAttacker){
                    character1.setDefender();
                    character1.removeProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 3;
                    
                    console.log("Character one set as defender");
                    console.log("Game State"+ gameState);
                }
                console.log("One clicked and CASE 2");
                console.log("Game State"+ gameState);
            break;
        }
        
    });

    $(".container").on("click","#two", function() {
        
        switch (gameState) {
            case 1:
                character2.selectAttacker();
                character1.setProbableDefender();
                character3.setProbableDefender();
                character4.setProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 2;
                    console.log("two clicked");
            break;
        
            case 2:
                if(!character2.isAttacker){
                    character2.setDefender();
                    character2.removeProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 3;
                    
                    console.log("Character two set as defender");
                    console.log("Game State"+ gameState);
                }
                console.log("Two clicked and CASE 2");
                console.log("Game State"+ gameState);
            break;
        }
        
        
    });

    $(".container").on("click","#three", function() {

        switch (gameState) {
            case 1:
                character3.selectAttacker();
                    character1.setProbableDefender();
                    character2.setProbableDefender();
                    character4.setProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 2;
            break;
        
            case 2:
                if(!character3.isAttacker){
                    character3.setDefender();
                    character3.removeProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 3;
                    
                    console.log("Character three set as defender");
                    console.log("Game State"+ gameState);
                }
            break;
        }

        
    });

    $(".container").on("click","#four", function() {

        switch (gameState) {
            case 1:
                character4.selectAttacker();
                    character1.setProbableDefender();
                    character2.setProbableDefender();
                    character3.setProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 2;
            break;
        
            case 2:
                if(!character4.isAttacker){
                    character4.setDefender();
                    character4.removeProbableDefender();
                    deletePlayers();
                    printPlayers(players);
                    gameState = 3;
                    
                    console.log("Character four set as defender");
                    console.log("Game State"+ gameState);
                }
            break;
        }

    });


    $(".fight").on("click",function() {
        
        console.clear();

        if (gameState === 3){
            whoFights(players);
        } 

        deletePlayers();
        printPlayers(players);
        
    });

});


//Create HTML for Player Card
function printPlayers(players){

    players.forEach(player => {
        
        player_card = '\
        <div class="card" id="'+ player.status().name +'">\
            <img class="card-img-top" src="assets/images/'+ player.status().name +'.jpeg" alt="Card image cap">\
            <div class="card-body">\
            <h5 class="card-title">'+ player.status().name +'</h5>\
            </div>\
            <ul class="list-group list-group-flush">\
                <li class="list-group-item"><b>healthPoints:</b>'+ player.status().healthPoints +' </li>\
                <li class="list-group-item"><b>attackPower:</b>'+ player.status().attackPower +'</li>\
                <li class="list-group-item"><b>counterpower:</b>'+ player.status().counterPower +'</li>\
                <li class="list-group-item"><b>isAttacker:</b>'+ player.status().isAttacker +'</li>\
                <li class="list-group-item"><b>isAlive:</b>'+ player.status().isAlive +'</li>\
                <li class="list-group-item"><b>isProbableDefender:</b>'+ player.status().isProbableDefender +'</li>\
                <li class="list-group-item"><b>isDefender:</b>'+ player.status().isDefender +'</li>\
            </ul>\
        </div>\
        '

        //Print all players that can be selected 
        if (player.status().isAlive && !player.status().isProbableDefender && !player.status().isDefender) {
            $("#card_deck_1").append(player_card);
        } 

        //Print all players that can be attacked
        if (!player.status().isAttacker && player.status().isAlive && player.status().isProbableDefender) {
            $("#card_deck_2").append(player_card);
        } 

        //Print the one player that will be attacked
        if (player.status().isDefender && player.status().isAlive) {
            $("#card_deck_3").append(player_card);
        } 

    });
}

//Delete all cards in all rows
function deletePlayers(){
    $(".card-deck").empty();
}


function whoFights(players){
    
    //Returns the array index of the attacker and the defender
    for (let index = 0; index < players.length; index++) {
        
        if(players[index].status().isAttacker){
            var attacker_index = index;
            console.log("Attacker index is"+ attacker_index);
        }
        
        if(players[index].status().isDefender){
            var defender_index = index;
            console.log("Defender index is"+ defender_index);
        }
    }

    //Fight
    //Substracts Attack from Defender
    //Kills defender if HP<0

    var attack = players[attacker_index].status().attackPower;

    console.log("Health before attack:     "+ players[defender_index].status().healthPoints);

    switch (defender_index) {
        case 0:
            var newHP = players[defender_index].status().healthPoints - attack; 
            
            character1.setHP(newHP);
            
                if ( players[defender_index].status().healthPoints <= 0 ) {
                    character1.kill();
                    gameState = 2;
                    console.log("character 1 killed");
                }
        break;

        case 1:
            var newHP = players[defender_index].status().healthPoints - attack; 
            character2.setHP(newHP)
            
                 if (players[defender_index].status().healthPoints <=0 ){
                    character2.kill();
                    gameState = 2;
                    console.log("character 2 killed");
                 }
        break;

        case 2:
            var newHP = players[defender_index].status().healthPoints - attack; 
            character3.setHP(newHP)
            
            if (players[defender_index].status().healthPoints <=0 ){
                character3.kill();
                gameState = 2;
                console.log("character 3 killed");
            }
        break;

        case 3:
            var newHP = players[defender_index].status().healthPoints - attack; 
            character4.setHP(newHP)
            
            if (players[defender_index].status().healthPoints <=0 ){
                character4.kill();
                gameState = 2;
                console.log("character 4 killed");
            }
        break;
    }

    //increases Attack power by base attack power 
    players[attacker_index].setAttackPower(attack+attack);
    console.log("Attacker index" + attacker_index);
    console.log("Attacker index" + players[attacker_index]);
    console.log("Attack value "+ character1.status().attackPower);
    
}





