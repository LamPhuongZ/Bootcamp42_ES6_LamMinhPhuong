import { Persons } from "../models/Persons.js";

export class Employees extends Persons {
    constructor(id, name, address, email, workDay, salary) {
        super(id, name, address, email),
            this.workDay = +workDay, // số ngày làm
            this.salary = +salary // lương theo ngày
    }

    calcSalary(){
        return this.workDay * this.salary;
    }
}