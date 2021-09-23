// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const utils = require("utils");
const emailVaildator = require("email-validator");


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
const promptUser = () => {
 inquirer.prompt([{
     type: "input",
     name: "Title",
     message: "What is the title of your project? (required)",
     validate: titleInput => {
         if (!titleInput) {
             return false;
         } else{
             console.log("A title name is required, please enter project name!");
             return true;
         }

         
        },
        type: "input",
        name: "desc",
        message: "Add a description for the application (required)",
        validate: descInput =>{
            if (!descInput) {
                console.log("You need to add a description for your project!");
                return false;
            }
            return true;

        },

        {
        type: "input",
        name: "use",
        message: ("Provide instructions on how to use the app"),
        },

    }])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
