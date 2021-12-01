# robot-gladiators
JavaScript to code a Robot Gladiators.

## This creates a function named "fight"

```js
var playerName = window.prompt("What is your robot's name?")
    window.alert(playerName);
console.log(playerName);
```

```js
// This will do math and log 20
console.log(10 + 10);
```

```js
var playerName = "Tony the Robot";

// Tony the Robot is ready for battle!
console.log("Tony the Robot" + " is ready for battle!");

// "Tony the Robot is ready for battle!"
console.log(playerName + " is ready for battle!");

// "Your robot, Tony the Robot, has won!
console.log("Your robot, " + playerName + ", has won!");
```

## Create function

```js
// Function expression - create function
var fight = function() {
    alert("Welcome " + enemyName + " to Robot Gladiators!");
};
// execute function
fight();

// FUnction declaration - create function
function fight(){
    alert("Welcome " + enemyName + " to Robot Gladiators!");
};
// execute function
fight();
```

## Checked condition 

```js
var health = 10;

if (health < 0) {
    console.log("This is not runnging!");
} else {
    console.log("This run instead!");
}
```

```js
// This is how the fight function work but We created new control flow that make easier to read

var fight = function() {
    // Alert players that they are starting the round
    alert("Welcome " + playerName + " to Robot Gladiators!");

    // Substract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    // check enemy's health
    if (enemyHealth <= 0) {
        alert(enemyName + " has died!");
    } else {
        alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    // check player's health
    if (playerHealth <= 0) {
        alert(playerName + " has died!");
    } else {
        alert(playerName + " still has " + playerHealth + " health left.");
    }

};

fight();
```

## Pseudocode

Game States
"WIN" - Player robot has defeated all enemy-robots
    * Fight all enemy-robots
    * Defeat each enemy-robot
"LOSE" - Player robot's health is zero or less

## Declare an Array of Enemy Combatants

```js
// var enemy1 = "Roborto";
// var enemy2 = "Amy Android";
// var enemy3 = "Robo Trumble";

//  Array
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames); // ["Roborto", "Amy Android", "Robo Trumble"]
console.log(enemyNames.length); // 3
console.log(enemyNames[0]); // Roborto

// for loop syntax
for([initial expression]; [condition]; [increment expression]) {
   statement
}

for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

```

## Battle the Combatants Until Defeated Using a while Loop

if (enemyHealth > 0) // if the enemy-robot has health points, continue to fight

while([Condition]) {
  statement
}

## Adjust the "LOSE" Game State

Game States
"LOSE" - Player robot's health is zero or less

## Break;
The break keyword allows us to exit the current loop.

## Create first fight - multiple fight

```js
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

```