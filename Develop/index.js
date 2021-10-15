// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// const emailVaildator = require("email-validator");


// prompt user for start of readme generator
//const promptUser = readmeData => {
//console.log(
//  "Welcome to the ReadME Generator! Let's begin with a few questions"
//);
//}
//if (!readmeData) {
//readmeData = [];
//}
// TODO: Create an array of questions for user input
// const promptUser = () => {

function runPromps() {

inquirer
    .prompt([{
        type: "input",
        name: "title",
        message: "What is the title of your project? (required)",
    },
    {
        type: "input",
        name: "desc",
        message: "Add a description for the application (required)",
        
    },
    {
        type: "input",
        name: "use",
        message: ("Provide instructions on how to use the app"),
    },
    {
        type: "input",
        name: "contribute",
        message: "Write your contributions",
    },
    {
        type: "input",
        name: "username",
        message: ("What is your GitHub username?"),
    },
    {
        type: "list",
        name: "license",
        message: "Select which license's to be used.",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email? (required)",
    },
    {

    }

    ]).then((data) => {
        console.log(data)
    })
}

runPromps()

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();
