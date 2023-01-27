const fs = require('fs');

class Engineer {
    constructor (name, id, email, github) {
        this.name = engineerName;
        this.id = engineerId;
        this.email = engineerEmail;
        this.github = engineerGithub;
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
        return 'Engineer'
      }
}

module.exports = Engineer