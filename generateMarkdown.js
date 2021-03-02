const managerCard = (manager) => {

    return ` 
    <div class="col-sm-3 mt-5">
    <div class="card border border-2">
    <div class="card-header bg-primary bg-gradient">
        <div class="row">
            <div class="col-4"><i class="fas fa-user-tie fs-1"></i></div>
            <div class="col">
                <div class="row">${manager.name}</div>
                <div class="row">${manager.getRole()}</div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ID: ${manager.id}
            </li>
            <li class="list-group-item">
                Email: ${manager.email}
            </li>
            <li class="list-group-item">
                Office Number: ${manager.officeNumber}
            </li>
        </ul>
    </div>
</div>
</div>
`
}
const engineerCard = (engineer) => {

    return `    
    <div class="col-sm-3 mt-5">                
    <div class="card border border-2">
    <div class="card-header bg-primary bg-gradient">
        <div class="row">
            <div class="col-4"><i class="fas fa-laptop-code fs-1"></i></div>
            <div class="col">
                <div class="row">${engineer.name}</div>
                <div class="row">${engineer.getRole()}</div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ID: ${engineer.id}
            </li>
            <li class="list-group-item">
                Email: ${engineer.email}
            </li>
            <li class="list-group-item">
                GitHub: ${engineer.gitHub}
            </li>
        </ul>
    </div>
</div>
</div>
`
}
const internCard = (intern) => {

    return `  
    <div class="col-sm-3 mt-5">                  
    <div class="card border border-2">
    <div class="card-header bg-primary bg-gradient">
        <div class="row">
            <div class="col-4"><i class="fas fa-graduation-cap fs-1"></i></div>
            <div class="col">
                <div class="row">${intern.name}</div>
                <div class="row">${intern.getRole()}</div>
            </div>
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ID: ${intern.id}
            </li>
            <li class="list-group-item">
                Email: ${intern.email}
            </li>
            <li class="list-group-item">
                School: ${intern.school}
            </li>
        </ul>
    </div>
</div>
</div>
`
}

function generateMarkdown(data){

    let employees = []
    let managerName = []

    data.forEach(employee => {

        
        if (employee.getRole() === "Manager") {
            let x = managerCard(employee);
            managerName.push(employee.name)
            employees.push(x);

        } else if (employee.getRole() === "Engineer"){
            
            let y = engineerCard(employee);
            employees.push(y);

        } else {

            let z = internCard(employee);
            employees.push(z);

        }

    });




    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/bda962699d.js" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">    
        <title>Team Profile Generator</title>
    </head>
    <body class="bg-dark">
    
        <div class="row">
            <h1 class='display-1 text-center bg-success bg-gradient'>${managerName}'s Team</h1>
        </div>
    
    
        <div class="container">
    
            <div class="row">
            ${employees.join('')}
            </div>
        
        </div>
    
        
    </body>
    </html>`

}

module.exports = generateMarkdown;