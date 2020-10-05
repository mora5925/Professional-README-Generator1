
const inquirer = require("inquirer");
const fs = require("fs");
const generatemarkdown = require("./utils/generateMarkdown")


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "what is your email address?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "username"
        },

        {
            type: "input",
            message: "please write a short description of your project",
            name: "username"
        },

        {
            type: "input",
            message: "what kind of license should your project have?",
            name: "username"
        },

        {
            type: "input",
            message: "What command should be run to install dependebcies?",
            name: "username"
        },

        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "username"
        },

        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "username"
        },

        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "username"
        }
    ])
    .then(function (response) {
        
     const generatedFile = generatemarkdown(response)  
     
     console.log(generatedFile);
    });
