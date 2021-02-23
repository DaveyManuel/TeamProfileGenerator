const Employee = require('./employee')

class Manager extends Employee {
    constructor(officeNumber){
       // const name = grabbed from data from inquirer? ${data.name}?
       // const id = 
       // const email = 
        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    
}