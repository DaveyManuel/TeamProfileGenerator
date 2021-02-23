class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        }
    getName(){
        //do I need to make it ${this.name}? Or ${data.name}?
        console.log(this.name)
    }
    getId(){

        console.log(this.id)

    }
    getEmail(){

        console.log(this.email)

    }
    getRole(){

        console.log(this)

    }
    
}

module.exports = Employee;