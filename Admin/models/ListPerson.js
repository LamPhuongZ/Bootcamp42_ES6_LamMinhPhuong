// class Persons {
//     constructor(id, name, address, email) {
//         this.id = id,
//             this.name = name,
//             this.address = address,
//             this.email = email
//     }
// }

// export class Students extends Persons {
//     constructor(id, name, address, email, maths, physics, chemistry) {
//         super(id, name, address, email),
//             this.maths = +maths,
//             this.physics = +physics,
//             this.chemistry = +chemistry
//     }

//     calcAverage(){
//         return Math.round((this.math + this.physics + this.chemistry) / 3);
//     }
// }

// export class Employees extends Persons {
//     constructor(id, name, address, email, workDay, salary) {
//         super(id, name, address, email),
//             this.workDay = +workDay, // số ngày làm
//             this.salary = +salary // lương theo ngày
//     }

//     calcSalary(){
//         return this.workDay * this.salary;
//     }
// }

// export class Customers extends Persons {
//     constructor(id, name, address, email, companyName, invoiceValue, evaluate) {
//         super(id, name, address, email),
//             this.companyName = companyName,
//             this.invoiceValue = invoiceValue, // trị giá hóa đơn
//             this.evaluate = evaluate // đánh giá
//     }
// }