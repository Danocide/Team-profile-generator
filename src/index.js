// require all of your classes
const employee = require('./lib/Employee.js')
const engineer = require('./lib/Engineer.js')
const intern = require('./lib/Intern.js')
const manager = require('./lib/Manager.js')
// require inquirer, path if needed, fs
const inquirer = require('inquirer');
const fs = require('fs')

// require your page template
// const pageTemplate = require('./page-template.js')
// empty team members array

let team = []

// empty id array
let teamId = []

// function that wraps everything (like an init function)
function init() {
    const managerPrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Managers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Managers email?'
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is the Managers office phone number?'
        }
    ];

    const rolePrompt = [
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add next?',
            choices: ['Employee', 'Engineer', 'Intern']
        }
    ];

    const employeePrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Employees Github username?'
        }
    ];

    const engineerPrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Engineers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineers email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers Github username?'
        }
    ];

    const internPrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Interns ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the Intern go to?'
        }
    ];

    const createTeam = async () => {
        // Get team manager information
        const manager = await inquirer.prompt(managerPrompt);
        team.push(manager);
        teamId.push(manager.id);

        while (true) {
            // Get next role to add
            const { role } = await inquirer.prompt(rolePrompt);

            if (role === 'Employee') {
                // Get employee information
                const employee = await inquirer.prompt(employeePrompt);
                employee.role = role;
                team.push(employee);
                teamId.push(employee.id);
            } else if (role === 'Engineer') {
                // Get engineer information
                const engineer = await inquirer.prompt(engineerPrompt);
                engineer.role = role;
                team.push(engineer);
                teamId.push(engineer.id);
            } else if (role === 'Intern') {
                // Get intern information
                const intern = await inquirer.prompt(internPrompt);
                intern.role = role;
                team.push(intern);
                teamId.push(intern.id);
            }

            // Ask if user wants to add another team member
            const { addAnother } = await inquirer.prompt({
                type: 'confirm',
                name: 'addAnother',
                message: 'Would you like to add another team member?'
            });

            if (!addAnother) {
                break;
            }
        }

        // Print out final team
        console.log(team);
        console.log(teamId);
    };

    createTeam();



    // function teamManager() {
    //     // function for creating a manager (call this at the bottom of your init function)
    //     // inquirer prompt with the manager questions
    //     // in your .then - set up a variable for manager that is equal to a new instance of your Manager class passing in the responses you recieved from the user's input
    //     // push that variable to your team members array, push the id to the id array
    // }


    // call your next function

    // next function should be for creating the team
    // this should ask the user what type of employee they would like to create
    // in your .then, have a conditional or switch case that runs that employee types function based on what they choose
    // or if they select the option that says they are done adding team members, run the function that builds the team


    // function buildTeam() {
    //     // fs.writeFileSync(yourPathToDistFolder, functionFromPageTemplate(teamMembers), 'utf-8');
    // }
};

init();
  // make sure call your init function