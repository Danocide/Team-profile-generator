const fs = require('fs');

class Intern {
    constructor (name, id, email, school) {
        this.name = internName;
        this.id = internId;
        this.email = internEmail;
        this.school = internSchool;
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
      getSchool() {
        return this.school
      }
      getRole() {
        return 'Intern'
      }
}

module.exports = Intern