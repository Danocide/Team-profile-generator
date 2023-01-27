const index = require('../index')

module.exports = (team) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

</head>

<body>
    <nav class="navbar bg-danger bg-body-tertiary py-5">
        <div class="container-fluid justify-content-center">
            <span class="h1 text-white">My Team</span>
        </div>
    </nav>

    <div class="container-md">
        <div class="row justify-content-center">

           ${createTeamCards(team)}


        </div>
    </div>

</body>

</html>`
}

function createTeamCards(team) {
    let cardsHTML = "";
    team.forEach(emp => {
        if (emp.constructor.name === "Manager") {
            cardsHTML += `<div class="col-4 card mt-5 mx-2" style="width: 18rem;">
            <div class="bg-primary card-body text-white h2">
                <h5 class="card-title">${emp.getName}</h5>
                <p class="card-text">🤡 ${emp.getRole}</p>
            </div>
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${emp.getId}</li>
                <li class="list-group-item">Email: <a href="mailto:${emp.getEmail}">email</a></li>
                <li class="list-group-item">Office Number: ${emp.getPhone}</li>
            </ul>
        </div>`
        }
        if (emp.constructor.name === "Engineer") {
            cardsHTML += `<div class="col-4 card mt-5 mx-2" style="width: 18rem;">
            <div class="bg-primary card-body text-white h2">
                <h5 class="card-title">${emp.name}</h5>
                <p class="card-text">🤬 ${emp.role}</p>
            </div>
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${emp.getId}</li>
                <li class="list-group-item">Email: <a href="mailto:${emp.getEmail}">${emp.getEmail}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${emp.getGit}">${emp.getGit}</a></li>
            </ul>
        </div>`
        }
        if (emp.constructor.name === "Employee") {
            cardsHTML += `<div class="col-4 card mt-5 mx-2" style="width: 18rem;">
            <div class="bg-primary card-body text-white h2">
                <h5 class="card-title">${emp.getName}</h5>
                <p class="card-text">🛼 ${emp.getRole}</p>
            </div>
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${emp.getId}</li>
                <li class="list-group-item">Email: <a href="mailto:${emp.getEmail}">${emp.getEmail}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${emp.getGit}">${emp.getGit}</a></li>
            </ul>
        </div>`
        }
        if (emp.constructor.name === "Intern") {
            cardsHTML += `<div class="col-4 card mt-5 mx-2" style="width: 18rem;">
            <div class="bg-primary card-body text-white h2">
                <h5 class="card-title">${emp.getName}</h5>
                <p class="card-text">👶 ${emp.getRole}</p>
            </div>
            <ul class="list-group list-group">
                <li class="list-group-item">ID: ${emp.getId}</li>
                <li class="list-group-item"><a href="mailto:${emp.getEmail}">${emp.getEmail}</a></li>
                <li class="list-group-item">School: ${emp.getSchool}</li>
            </ul>
        </div>`
        }
    })
    return cardsHTML;
}