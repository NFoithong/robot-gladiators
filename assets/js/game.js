// This creates a function named "fight"
// var playerName = window.prompt("What is your robot's name?")

// // window.alert(playerName);
// console.log(playerName);

// console.log("This logs a string, good for leaving yourself a message");
// // This will do math and log 20
// console.log(10 + 10);
// // What is this?
// console.log("Our robot's name is " + playerName);
// function fight() {
//     window.alert("The fight has begun!");
// }

// var playerName = "Tony the Robot";

// // Tony the Robot is ready for battle!
// console.log("Tony the Robot" + " is ready for battle!");

// // "Tony the Robot is ready for battle!"
// console.log(playerName + " is ready for battle!");

// // "Your robot, Tony the Robot, has won!
// console.log("Your robot, " + playerName + ", has won!");


// // Function expression - create function
// var fight = function() {
//     alert("Welcome " + enemyName + " to Robot Gladiators!");
// };
// // execute function
// fight();

// // FUnction declaration - create function
// function fight(){
//     alert("Welcome " + enemyName + " to Robot Gladiators!");
// };
// // execute function
// fight();


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;

// You can also log multiple values at once like this
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 80;

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



// //  checked condition 
// var health = 10;

// if (health < 0) {
//     console.log("This is not runnging!");
// } else {
//     console.log("This run instead!");
// }