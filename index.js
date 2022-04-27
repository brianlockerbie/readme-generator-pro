// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project name. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please entera project name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description for your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter a project description!");
                return false;
            } 
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your project's installation instructions!");
                return false;
            } 
        }
    }
    ,
    {
        type: "input",
        name: "usage",
        message: "Please enter usage details for your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your project's usage details!");
                return false;
            } 
        }
    }
    ,
    {
        type: "input",
        name: "contributing",
        message: "Please enter details for contributing to your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your project's contributing details!");
                return false;
            } 
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter details for testing your project. (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter your project's testing details!");
                return false;
            } 
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project.",
        choices: ["MIT", "Apache-2.0", "gpl-3.0", "None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // new promise for file
    return new Promise ((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, generateMarkdown(data), err => {
            if(err) {
                reject(err);
                return
            } else {
                resolve({
                    ok: true,
                    message: 'README Created!'
                })
            }
        })
    })
}

// TODO: Create a function to initialize app
init = () => {
    return inquirer
        .prompt(questions)
        .then(readMeData => {
            const { title } = readMeData
            return writeToFile(title, readMeData);
        })
        .then(result => {
            console.log(result);
        })

}

// Function call to initialize app
init();
