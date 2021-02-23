const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number?'
    },
    {
        type: 'list',
        name: 'employee',
        message: 'Please select your role below.',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

function writeToFile(){

};

function startQuestions(){

    inquirer
    .prompt(questions)
    .then((data => {
        
    }))
};

startQuestions()