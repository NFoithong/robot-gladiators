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