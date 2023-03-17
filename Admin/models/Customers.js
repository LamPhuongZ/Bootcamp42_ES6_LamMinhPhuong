import { Persons } from "../models/Persons.js";

export class Customers extends Persons {
    constructor(id, name, address, email, companyName, invoiceValue, evaluate) {
        super(id, name, address, email),
            this.companyName = companyName,
            this.invoiceValue = invoiceValue, // trị giá hóa đơn
            this.evaluate = evaluate // đánh giá
    }
}