const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, OfficeNumber){
        super(name,id, email);
        this.OfficeNumber = OfficeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.OfficeNumber
    }
}
module.exports = Manager