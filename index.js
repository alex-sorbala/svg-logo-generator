// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js');

// An array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Enter a 3 letter abbreviation',
    name: 'text',
    validate: function (input){
        if(input.length > 3){
            return "Should not be more than 3 characters"
        }
        return true;
    }
    },
    {
    type: 'input',
    message: 'Provide a text color name or #hex:',
    name: 'textColor',
    },
    {
    type: 'list',
    message: 'Select the background shape:',
    name: 'shape',
    choices: ['circle','square', 'triangle'],
    },
    {
    type: 'input',
    message: 'Enter a background color name or #hex:',
    name: 'background',
    }
];

// A function to write the SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`${fileName} file sucessfully created/updated !`)
    )
}

// A function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
        writeToFile('new-Logo.svg', generateSVG(response))
    );
}

// Function call to initialize app
init();

