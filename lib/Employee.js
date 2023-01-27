const fs = require('fs');

class Employee {
    constructor (name, id, email, github) {
        this.name = employeeName;
        this.id = employeeId;
        this.email = employeeEmail;
        this.github = employeeGithub;
    }
    getName() {
        return this.name;
      }
      getId() {
        return this.id;
      }
      getEmail() {
        return this.email;
      }
      getGit() {
        return this.github
      }
      getRole() {
        return 'Employee'
      }
}

module.exports = Employee