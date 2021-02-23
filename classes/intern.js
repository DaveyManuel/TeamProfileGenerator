const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
        // const name =
        // const id =
        // const email = 
        this.school = school;
        super(name,id,email);
    }

    getSchool(){
        console.log(this.school);
    }
}