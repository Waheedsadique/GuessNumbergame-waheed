#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
const sleep = (ms1 = 1000) => new Promise((r) => setTimeout(r, ms1));
// const sleep = () => {
//   return new Promise((r) => {
//     setTimeout(r, 1000)
//   })
// }
async function welcomeGame() {
    figlet('WAHHED GAME', function (err, data) {
        console.log(chalk.green(data));
    });
    await sleep();
    const rainbow = chalkAnimation.rainbow('Let\'s start Guessing Number Game');
    await sleep();
    rainbow.stop();
}
// welcomeGame();
let playlife = 3;
const random = Math.floor(Math.random() * 10) + 1;
var userInput;
async function Guessnumber() {
    await welcomeGame();
    do {
        playlife--;
        console.log(chalk.yellow(`player life left ${playlife}`));
        var UserInput = await inquirer
            .prompt([
            /* Pass your questions in here */
            {
                name: "operator",
                type: "input",
                message: chalk.green("Guess the Number bwtween 1 to 10 ? \n"),
                validate: function (input) {
                    if (isNaN(input) || input == "") {
                        return "enter the ValidNumber";
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        userInput = Number(UserInput.operator);
        if (userInput < random) {
            console.log(chalk.bold.red("Opps! your guessing number is smaller !"));
        }
        else if (userInput > random) {
            console.log(chalk.bold.red("Opps! your guessing number is greater !"));
        }
        else if (userInput == random) {
            console.log(chalk.bold.bgBlackBright("Congratulation you are winner !"));
        }
    } while (playlife > 0 && userInput !== random);
    if (playlife == 0) {
        console.log(chalk.bold.bgBlueBright("GAME OVER !!"));
    }
    ;
}
// await Guessnumber();
async function StartAgain() {
    do {
        playlife = 3;
        await Guessnumber();
        await sleep();
        var again = await inquirer
            .prompt({
            name: "restart",
            type: "input",
            message: chalk.yellow("Do you want to continue? y or n:"),
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'YES' || again.restart == 'yes');
    {
    }
}
StartAgain();
