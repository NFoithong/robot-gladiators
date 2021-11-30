var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// // You can also log multiple values at once like this
// console.log(playerName, playerHealth, playerAttack, playerMoney);

// var enemyName = "Roborto";
// var enemyHealth = 50;
// var enemyAttack = 80;

var fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0) {

        // ask player if they'd like to fight or run
        var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                alert(playerName + " has decided to skip this fight. Goobye!");
                // substract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by substracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.");

        } else {
            alert("You need to choose a valid option. Try again!");
            break;
        }

        // // if player choses to fight, then fight
        // if (promptFight === "fight" || promptFight === "FIGHT") {

        // check enemy's health
        if (enemyHealth <= 0) {
            alert(enemyNames + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by substracting the amonut set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
            alert(playerName + " has died!");
            break;
        } else {
            alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player chose to SKIP
    }
};
// if no (false), ask question again by running fight() again

// delete this --> alert(playerName + " has chosen to skip the fight!");

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        alert("Welcomoe to Rbot Gladiators! Round " + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }

}

// else if{
//     alert("You need to choose a valid option. Try again!");
// }