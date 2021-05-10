const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email)
    this.name = name;
    this.id = id;
    this.email = email;
    this.number = number;
  }
  getOffice(){ return this.number }
  getRole(){ return 'Manager' }
}

module.exports = Manager;