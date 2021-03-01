const managerCard = (manager) => {

    return ` 
    <div class="col-sm-3 mt-5">
    <div class="card">
    <div class="card-header">
        <div class="row">
            ${manager.name}
        </div>
        <div class="row">
            ${manager.getRole()}
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${manager.id}
            </li>
            <li class="list-group-item">
                ${manager.email}
            </li>
            <li class="list-group-item">
                ${manager.officeNumber}
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
    <div class="card">
    <div class="card-header">
        <div class="row">
            ${engineer.name}
        </div>
        <div class="row">
            ${engineer.getRole()}
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${engineer.id}
            </li>
            <li class="list-group-item">
                ${engineer.email}
            </li>
            <li class="list-group-item">
                ${engineer.gitHub}
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
    <div class="card">
    <div class="card-header">
        <div class="row">
            ${intern.name}
        </div>
        <div class="row">
            ${intern.getRole()}
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                ${intern.id}
            </li>
            <li class="list-group-item">
                ${intern.email}
            </li>
            <li class="list-group-item">
                ${intern.school}
            </li>
        </ul>
    </div>
</div>
</div>
`
}

function generateMarkdown(data){

    console.log(data);

    let employees = []

    data.forEach(employee => {

        
        if (employee.getRole() === "Manager") {
            
            let x = managerCard(employee);
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">    
        <title>Team Profile Generator</title>
    </head>
    <body>
    
        <div class="row">
            <h1 class='display-1 text-center bg-dark text-white'>Team Profile Generator</h1>
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