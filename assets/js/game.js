var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// // You can also log multiple values at once like this
// console.log(playerName, playerHealth, playerAttack, playerMoney);


// var enemyName = "Roborto";
// var enemyHealth = 50;
// var enemyAttack = 80;

var fight = function(enemyName) {
    alert("Welcome " + playerName + " to Robot Gladiators!");

    // repeat and execute as long as the enemy-robot is alive 
    while (enemyHealth > 0) {
        // place fight function code block here . . .
        // var fight = function() {
        // Alert players that they are starting the round
        // alert("Welcome " + playerName + " to Robot Gladiators!");
        // ask player if they'd like to fight or run

        var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by substracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0) {
                alert(enemyNames + " has died!");
            } else {
                alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by substracting the amonut set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                alert(playerName + " has died!");
            } else {
                alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player chose to SKIP
        } else if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                alert(playerName + " has decided to skip this fight. Goobye!");
                // substract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
                // if no (false), ask question again by running fight() again
            } else {
                fight();
            }
            // delete this --> alert(playerName + " has chosen to skip the fight!");
        } else {
            alert("You need to choose a valid option. Try again!");
        }
        // }
    }


};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
// the for loop, replacing the fight() function
// for (var i = 0; i < enemyNames.length; i++) {
//     fight(enemyNames[i]);
// }

// debugger
// for (var i = 0; i < enemyNames.length; i++) {
//     debugger;
//     // call fight function with enemy-robot
//     fight(enemyNames[i]);
// }
// fight();