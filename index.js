
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
            name: "address"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project"
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
            name: "command"
        },

        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "knowing"
        },

        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contribute"
        },
        {
        type: 'list',
        name: 'license',
        message: 'Select a license from the list below',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'Mozilla Public license', 'IBM Public license', 'Artistic license 2.0']
    },
    ])
    .then(function (response) {
        
     const generatedFile = generatemarkdown(response)  
     
     console.log(generatedFile);
    });
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err)
                throw new Error(err);
            console.log("Readme is successfully created")
    })
    }
    
    // function to initialize program
    function init() {
    
    }
    
    // function call to initialize program
    init();
    
