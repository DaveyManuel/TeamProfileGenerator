const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub){
        // const name =
        // const email = 
        // const id =
        this.gitHub = gitHub;
        super(name,email,id);
    }

    getGitHub(){
        console.log(this.gitHub);
    }
}