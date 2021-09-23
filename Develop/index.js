// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const utils = require("utils");


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

 return inquirer.prompt([{
     type: "input",
     name: "Title",
     message: "What is the title of your project? (Required)",
     validate: titleInput => {
         if (!titleInput) {
             return true;
         } else{
             console.log("A title name is required, please enter project name!");
             return false;
         }
         return true;
        },

        type: "input",
        name: "description"

    }])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
