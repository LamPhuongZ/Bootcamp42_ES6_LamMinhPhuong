import { Persons } from "../models/Persons.js";

export class Students extends Persons {
    constructor(id, name, address, email, math, physics, chemistry) {
        super(id, name, address, email),
            this.math = +math,
            this.physics = +physics,
            this.chemistry = +chemistry
    }

    calcAverage(){
        return Math.round((this.math + this.physics + this.chemistry) / 3);
    }
}