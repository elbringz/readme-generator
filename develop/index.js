// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

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

    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = 'README.md';
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
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
        {
            type: 'input',
            name: 'desc',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'license',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'giturl',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'gituser',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[9]
        },
    ])
}

// Function call to initialize app
init();