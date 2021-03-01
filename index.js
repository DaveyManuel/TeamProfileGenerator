const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const Manager = require('./classes/manager');
const Intern = require('./classes/intern');
const Engineer = require('./classes/engineer');

let registeredEmployees = [];

const generalQuestions = [
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
        name: 'role',
        message: 'Please select your role below.',
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

const managerQuestions = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your office number.'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please enter your GitHub account.'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'Please enter the school you attend.'
    }
]

const menuQuestions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do next?',
        choices: ['Add another member', 'Build team']
    }
]

function writeToFile(fileName,data){

    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Created HTML');
      });

};

function teamBuild(){

    inquirer
    .prompt(menuQuestions)
    .then(menuAnswer =>{
        switch (menuAnswer.menu) {
            case 'Add another member':
                startQuestions();
                break;
        
            case 'Build team':
                console.log(registeredEmployees);
                writeToFile('team.html', generateMarkdown(registeredEmployees));   
                break;
            default:
                break;
        }
    })
}

function startQuestions(){

    inquirer
    .prompt(generalQuestions)
    .then(generalAnswers => {
        console.log(generalAnswers);

        if (generalAnswers.role === 'Manager') {
            inquirer
            .prompt(managerQuestions)
            .then(managerAnswer =>{
                const teamManager = new Manager(generalAnswers.name,generalAnswers.id,generalAnswers.email,managerAnswer.officeNumber)
                console.log(teamManager);
                registeredEmployees.push(teamManager);
                teamBuild();
            })
        } else if (generalAnswers.role === 'Engineer') {
            inquirer
            .prompt(engineerQuestions)
            .then(engineerAnswer =>{
                const teamEngineer = new Engineer(generalAnswers.name,generalAnswers.id,generalAnswers.email,engineerAnswer.gitHub)
                console.log(teamEngineer);
                registeredEmployees.push(teamEngineer);
                teamBuild();
            })
        } else {
            inquirer
            .prompt(internQuestions)
            .then(internAnswer =>{
                const teamIntern = new Intern(generalAnswers.name,generalAnswers.id,generalAnswers.email,internAnswer.school)
                console.log(teamIntern);
                registeredEmployees.push(teamIntern);
                teamBuild();
            })
        }

    })   

};


startQuestions();

