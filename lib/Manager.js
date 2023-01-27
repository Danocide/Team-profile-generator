const fs = require('fs');

class Manager {
    constructor (name, id, email, officePhone) {
        this.name = managerName;
        this.id = managerId;
        this.email = managerEmail;
        this.officePhone = managerOfficePhone;
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
      getPhone() {
        return this.officePhone
      }
      getRole() {
        return 'Manager'
      }
}

module.exports = Manager