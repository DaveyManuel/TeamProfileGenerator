# TeamProfileGenerator

## Description

For this project, I created a command-line application that takes in user input and returns an html page. This project is designed for teams who need to keep track of all of members in an efficient yet simple manner. The application takes in input from the user such as name, email, employee ID, role, and depending on your role will ask further questions. Once the user is finished adding all of their team members it will create an html page which shows all of the members with their pertinent role, name, email, employee ID, manager office number, intern's school, and engineer's GitHub.

## Deployed Link

https://github.com/DaveyManuel/TeamProfileGenerator

## Usage

Attached is a screen recorded video of the final application:

https://youtu.be/j1H6g9aaJJY

## Logic

### First Steps

For this command-line application I needed to first install the inquirer npm package so that we could properly prompt our user within the terminal. After installation was completed, we were then given a package-lock.json containing all the information for our npm. The next thing I did was add node_modules and DS.store to my gitignore so that any unnecessary files would not be shown in my GitHub repo. Also needed for the package.json was to install Jest in order to run our tests.

### Tests

By using the npm package Jest, I was able to run tests on each of my constructors and make sure that they functioned correctly. In each test.js file I simulated a potential user and wrote in their information as variables. I then told the test file to expect a certain criteria to be (or to match) another criteria. I also tested functionality for my getRole function so that the role would match the constructor. For example, if the getRole function was run on a manager, it would return 'Manager'.

### index.js

My index file was used to run the entire application, so it was important to require all of the necessary modules such as my constructors and my generateMarkdown file as well. After requiring the necessary modules, I created my array of questions that would be prompted to the user using Inquirer. I created general questions that would be asked of all types of employees, then I also created questions that were specific to each role. Inside of my startQuestions function I first asked the generalQuestions and after that data was received, I prompted managerQuestions, engineerQuestions, and internQuestions based on their role by implementing an if else statement inside of my inquirer.then. After the specific role question had been asked, I then used my teamBuild function to ask if they wanted to add another member or if they wanted to go ahead and build their team. If the user wants to build their team, then the writeToFile function is used and generateMarkdown is passed as an argument holding all of the registered employees as usable data (generateMarkdown(registeredEmployees)). 

### generateMarkdown.js

My generateMarkdown file is used to create the html document that will showcase the user's team. The first thing I did was to create three arrow function variables called managerCard. engineerCard, and internCard. These functions are used to return html of each employee card by utilizing user inputted data written as template strings. After I created the skeleton for each card I then needed to create the html skeleton for the whole page, which is done in my generateMarkdown function. I started by creating an empty employees array variable and implementing a 'for each' to run through the data array (which would be given in the index file). If the employee's role was a Manager I would push the manager card into the employee array and same goes for engineers and interns respectively. I then implemented this array into my html utilizing a template string. 