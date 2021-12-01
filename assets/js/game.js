// var playerInfo.name = window.prompt("What is your robot's name?");
// var playerInfo.health = 100;
// var playerInfo.attack = 10;
// var playerInfo.money = 10;

// var enemy.name = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemy.health = 50;
// var enemy.attack = 12;

// console.log(enemy.name);
// console.log(enemy.name.length);
// console.log(enemy.name[0]);
// console.log(enemy.name[3]);

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // enter the conditional recursive function call here!
    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") { //  || promptFight === "SKIP")

        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping, but don't let them go into the negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);

            // return true if player wants to leave
            return true;
        }
    }
};

// fight function (now with parameter for enemy's name)
var fight = function(enemy) {

    while (playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) { // replace code with this function call
            //if true, leave fight by breaking loop
            break;
        }

        // // ask player if they'd like to fight or run
        // var promptFight = prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // // if player picks "skip" confirm and then stop the loop
        // if (promptFight === "SKIP" || promptFight === "skip" || promptFight === "Skip") {
        //     // confirm player wants to skip
        //     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //     // if yes (true), leave fight
        //     if (confirmSkip) {
        //         alert(playerInfo.name + " has decided to skip this fight. Goobye!");
        //         // substract money from playerInfo.money for skipping
        //         playerInfo.money = Math.max(0, playerInfo.money - 10);
        //         console.log("playerInfo.money", playerInfo.money);
        //         break;
        // }
        //  }

        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by substracting the amount set in the playerInfo.attack variable
            // enemy.health = Math.max(0, enemy.health - playerInfo.attack);
            //generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

        } else {
            alert("You need to choose a valid option. Try again!");
            break;
        }

        // // if player choses to fight, then fight
        // if (promptFight === "fight" || promptFight === "FIGHT") {

        // check enemy's health
        if (enemy.health <= 0) {
            alert(enemy.name + " has died!");

            // award player money for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // remove player's health by substracting the amonut set in the enemy.attack variable
        // playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

        // check player's health
        if (playerInfo.health <= 0) {
            alert(playerInfo.name + " has died!");
            break;
        } else {
            alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};


// function to start a new game
var startGame = function() {
    //reset player stats
    // playerInfo.health = 100;
    // playerInfo.attack = 10;
    // playerInfo.money = 10;
    playerInfo.reset();

    // fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        // if player is still alive, keep fighting
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight based on the index of the enemy.name array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            // enemy.health = Math.floor(Math.random() * 21) + 40;
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            //if player is still alive and we're not at last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }

        } else {
            alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// go to shop between battles function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            // if (playerInfo.money >= 7) {
            //     alert("Refilling player's health by 20 for 7 dollars.");

            //     //increasse health and decrease money
            //     playerInfo.health = playerInfo.health + 20;
            //     playerInfo.money = playerInfo.money - 7;
            // } else {
            //     alert("You don't have enough money!");
            // }
            playerInfo.refillHealth();
            break;
        case "UPGRADE": //new case
        case "upgrade":
            // if (playerInfo.money >= 7) {
            //     alert("Upgrading player's attack by 6 for 7 dollars.");

            //     //increase attack and decrease money
            //     playerInfo.attack = playerInfo.attack + 6;
            //     playerInfo.money = playerInfo.money - 7;
            // } else {
            //     alert("You don't have enough money!");
            // }
            playerInfo.upgradeAttack();
            break;
        case "LEAVE": //new case
        case "leave":
            alert("Leaving the store.");

            //do nothing, so function will end
            break;
        default:
            alert("You did not pick a valid option. Try again!");

            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

/* END GAME FUNCTIONS */

// function to set name
var getPlayerName = function() {
    var name = "";

    // ***************************************
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    } // ***************************************

    console.log("Your robot's name is " + name);
    return name;
};

/* GAME INFORMATION / VARIABLES */

//function to generate a random numeric value

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }, // comma!
    refillHealth: function() {
        if (this.money >= 7) {
            alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            alert("You don't have enough money!");
        }
    }, //comma!
    upgradeAttack: function() {
        if (this.money >= 7) {
            alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            alert("You don't have enough money!");
        }
    }
};

// enemy information
var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14),
        shield: {
            type: "wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// start the game when the page loads
startGame();