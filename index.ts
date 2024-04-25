#! /usr/bin/env node

// import inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.greenBright( "\n \t\t <======> Welcome to Word Counter <======>"));

let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:" Write a sentence"
    }
]);

let word = answer.sentence.trim().split(" ");

console.log(chalk.bold.blueBright("Sentence Word"));
console.log(word);

console.log(` Word Count : ${chalk.bold.redBright(word.length)}`);
console.log(chalk.greenBright("=".repeat(60)));