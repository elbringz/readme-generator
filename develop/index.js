// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',

    'Describe your project.',

    'What are the installation requirements for your project?',
    
    'What is your project used for?',

    'Which license does your project have?',

    'Any credits to be given?',

    'How can your project be tested?',

    'Add your Github URL.',

    'Add your Github username.',

    'What is your email address?',

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
        type: 'input',
        name: 'title',
        message: questions[0]
        },
    ])
}

// Function call to initialize app
init();