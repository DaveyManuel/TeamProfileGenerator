const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/manager');
const Intern = require('./classes/intern');
const Engineer = require('./classes/engineer');

// now I can create new manager....

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
                // make sure to add parameters to writeToFile
                writeToFile();   
                break;
            default:
                break;
        }
    })
}

function startQuestions(){

    // Would I need some sort of if else statement dependent on data.role? So that depending on the role of the person it can ask appropriate questions?
    inquirer
    .prompt(generalQuestions)
    .then(generalAnswers => {
        console.log(generalAnswers);

        if (generalAnswers.role === 'Manager') {
            inquirer
            .prompt(managerQuestions)
            .then(managerAnswer =>{
                console.log(managerAnswer);
                console.log(generalAnswers);
            })
        } 
        // else if(){
        //     console.log(managerQuestions);
        // }





    })

 

//     if (generalQuestions[3].choices === generalQuestions[3].choices[1]) {
//         inquirer
//         .prompt(engineerQuestions)
//         .then((engineerAnswer =>{
//             const {gitHub} = engineerAnswer
//             console.log(engineerAnswer);
//         }))
//     }

//     if (generalQuestions[3].choices === generalQuestions[3].choices[2]) {
//         inquirer
//         .prompt(internQuestions)
//         .then((internAnswer =>{
//             const {school} = internAnswer
//             console.log(internAnswer);

//     }))
// }
};

startQuestions();


// Would I need to module.exports = index? So that I can use it for my classes? Or do I need to require employee classes?