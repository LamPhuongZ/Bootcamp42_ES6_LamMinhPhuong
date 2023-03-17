import { Students } from "../models/Students.js";
import { Employees } from "../models/Employees.js";
import { Customers } from "../models/Customers.js";

let personList = getPersonList();
let sortFlag = "";

renderPerson(personList);

// Thêm học sinh
window.createStudent = () => {
    let id = getElement("#studentId").value;
    let name = getElement("#studentName").value;
    let address = getElement("#studentAddress").value;
    let email = getElement("#studentEmail").value;
    let math = +getElement("#math").value;
    let physics = +getElement("#physics").value;
    let chemistry = +getElement("#chemistry").value;

    if (!isValidateStudent()) {
        return;
    }

    const student = new Students(
        id,
        name,
        address,
        email,
        math,
        physics,
        chemistry
    );

    personList.push(student);

    renderPerson(personList);

    resetInputStudent();

    storePersonList();
}

// Thêm nhân viên
window.createEmployee = () => {
    let id = getElement("#employeeId").value;
    let name = getElement("#employeeName").value;
    let address = getElement("#employeeAddress").value;
    let email = getElement("#employeeEmail").value;
    let workDay = +getElement("#numberWorking").value;
    let salary = +getElement("#salaryByDay").value;

    if (!isValidateEmployee()) {
        return;
    }

    const employee = new Employees(
        id,
        name,
        address,
        email,
        workDay,
        salary
    );

    personList.push(employee);

    renderPerson(personList);

    resetInputEmployee();

    storePersonList();
}

// Thêm khách hàng
window.createCustomer = () => {
    let id = getElement("#customerId").value;
    let name = getElement("#customerName").value;
    let address = getElement("#customerAddress").value;
    let email = getElement("#customerEmail").value;
    let companyName = getElement("#companyName").value;
    let invoiceValue = getElement("#invoiceValue").value;
    let evaluate = getElement("#evaluate").value;

    if (!isValidateCustomer()) {
        return;
    }

    const customer = new Customers(
        id,
        name,
        address,
        email,
        companyName,
        invoiceValue,
        evaluate
    );


    personList.push(customer);

    renderPerson(personList);

    resetInputCustomer();

    storePersonList();
}

// Hàm chỉnh sửa thông tin
window.selectPersonToUpdate = (personId) => {
    let selectedPerson = personList.find((person) => {
        return person.id === personId;
    });

    switch (selectedPerson.constructor.name) {
        case "Students":
            getElement("#studentId").value = selectedPerson.id;
            getElement("#studentName").value = selectedPerson.name;
            getElement("#studentAddress").value = selectedPerson.address;
            getElement("#studentEmail").value = selectedPerson.email;
            getElement("#math").value = selectedPerson.math;
            getElement("#physics").value = selectedPerson.physics;
            getElement("#chemistry").value = selectedPerson.chemistry;

            getElement("#studentId").disabled = true;
            getElement(".title__Student").innerHTML = "Update Student";
            getElement(".footer__Student").innerHTML =
                `
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn__updateStudent" onclick="updateStudent('${selectedPerson.id}')">Update Student</button>
                `
            $("#modalStudent").modal("show");

            break;

        case "Employees":
            getElement("#employeeId").value = selectedPerson.id;
            getElement("#employeeName").value = selectedPerson.name;
            getElement("#employeeAddress").value = selectedPerson.address;
            getElement("#employeeEmail").value = selectedPerson.email;
            getElement("#numberWorking").value = selectedPerson.workDay;
            getElement("#salaryByDay").value = selectedPerson.salary;

            getElement("#employeeId").disabled = true;
            getElement(".title__Employee").innerHTML = "Update Employee";
            getElement(".footer__Employee").innerHTML =
                `
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn__updateEmployee" onclick="updateEmployee('${selectedPerson.id}')">Update Employee</button>
                `
            $("#modalEmployee").modal("show");

            break;

        case "Customers":
            getElement("#customerId").value = selectedPerson.id;
            getElement("#customerName").value = selectedPerson.name;
            getElement("#customerAddress").value = selectedPerson.address;
            getElement("#customerEmail").value = selectedPerson.email;
            getElement("#companyName").value = selectedPerson.companyName;
            getElement("#invoiceValue").value = selectedPerson.invoiceValue;
            getElement("#evaluate").value = selectedPerson.evaluate;

            getElement("#customerId").disabled = true;
            getElement(".title__Customer").innerHTML = "Update Customer";
            getElement(".footer__Customer").innerHTML =
                `
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn__updateCustomer" onclick="updateCustomer('${selectedPerson.id}')">Update Customer</button>
                `
            $("#modalCustomer").modal("show");

            break;
    }
}

// Cập nhật thông tin học sinh
window.updateStudent = () => {
    let id = getElement("#studentId").value;
    let name = getElement("#studentName").value;
    let address = getElement("#studentAddress").value;
    let email = getElement("#studentEmail").value;
    let math = +getElement("#math").value;
    let physics = +getElement("#physics").value;
    let chemistry = +getElement("#chemistry").value;

    const student = new Students(
        id,
        name,
        address,
        email,
        math,
        physics,
        chemistry
    );

    let index = personList.findIndex((person) => {
        return person.id === id;
    });
    personList[index] = student;

    renderPerson(personList);
    resetInputStudent();
    storePersonList();

}

// Cập nhật thông tin nhân viên
window.updateEmployee = () => {
    let id = getElement("#employeeId").value;
    let name = getElement("#employeeName").value;
    let address = getElement("#employeeAddress").value;
    let email = getElement("#employeeEmail").value;
    let workDay = +getElement("#numberWorking").value;
    let salary = +getElement("#salaryByDay").value;

    const employee = new Employees(
        id,
        name,
        address,
        email,
        workDay,
        salary
    );

    let index = personList.findIndex((person) => {
        return person.id === id;
    });
    personList[index] = employee;

    renderPerson(personList);
    resetInputEmployee();
    storePersonList();
}

// Cập nhật thông tin khách hàng
window.updateCustomer = () => {
    let id = getElement("#customerId").value;
    let name = getElement("#customerName").value;
    let address = getElement("#customerAddress").value;
    let email = getElement("#customerEmail").value;
    let companyName = getElement("#companyName").value;
    let invoiceValue = getElement("#invoiceValue").value;
    let evaluate = getElement("#evaluate").value;

    const customer = new Customers(
        id,
        name,
        address,
        email,
        companyName,
        invoiceValue,
        evaluate
    );

    let index = personList.findIndex((person) => {
        return person.id === id;
    });
    personList[index] = customer;

    renderPerson(personList);
    resetInputCustomer();
    storePersonList();
}

// Xóa người dùng
window.deletePerson = (personId) => {
    personList = personList.filter((person) => {
        return person.id !== personId;
    });

    renderPerson(personList);

    storePersonList();
}

// Lọc danh sách người dùng theo loại người dùng
window.sortPerson = () => {
    let type = getElement("#typePerson").value;
    let result = "";
    switch (type) {
        case '1': {
            result = personList.filter(person => person.constructor.name === "Students");
        }
            break;
        case '2': {
            result = personList.filter(person => person.constructor.name === "Employees");
        }
            break;
        case '3': {
            result = personList.filter(person => person.constructor.name === "Customers");
        }
            break;
        default: {
            result = personList;
        }
    }
    renderPerson(result);
}

// Sắp xếp danh sách theo thứ tự họ tên
window.sortByName = () => {
    if (!sortFlag || sortFlag === "desc") {
        personList.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            else {
                return 1;
            }
        });
        sortFlag = "asc";
    } else if (sortFlag === "asc") {
        personList.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            else {
                return 1;
            }
        });
        sortFlag = "desc";
    }

    renderPerson(personList);


    // let sort = getElement("#sort").value;
    // let result = "";

    // if (sort) {
    //     result = personList.sort((a, b) => {
    //         if (a.name < b.name) {
    //             return -1;
    //         } else {
    //             return 1;
    //         }
    //     });
    // }

    // renderPerson(result);
}
getElement("#sort").onclick = sortByName;


// Hàm hiển thị danh sách học viện ra table
function renderPerson(persons) {
    let html = persons.reduce((result, data) => {
        return (
            result +
            `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.address}</td>
                    <td>${data.email}</td>
                    <td>${data.constructor.name}</td>
                    <td> 
                        <button type="button" class="btn btn-secondary" onclick="selectPersonToUpdate('${data.id}')">Edit</button>
                        <button class="btn btn-info" data-toggle="modal" data-target="#detailsModal" onclick="renderDetails('${data.id}')">Details Info</button>
                        <button type="button" class="btn btn-danger" onclick="deletePerson('${data.id}')">Delete</button>
                    </td>
                </tr>
            `
        );
    }, "");
    getElement("#tblListInfo").innerHTML = html;
}

// Hàm hiển thị chi tiết của các type
window.renderDetails = (personId) => {
    let person = personList.find(person => person.id === personId);
    getElement("#detailsHeader").innerHTML = person.constructor.name + " - " + person.name;
    let html = `
                    <label class='font-weight-bold'>ID: </label>
                    <span>${person.id}</span><br>
                    <label class='font-weight-bold'>Name: </label>
                    <span>${person.name}</span><br>
                    <label class='font-weight-bold'>Address: </label>
                    <span>${person.address}</span><br>
                    <label class='font-weight-bold'>Email: </label>
                    <span>${person.email}</span><br>
                `;
    switch (person.constructor.name) {
        case 'Students': {
            html += `
            <label class='font-weight-bold'>Math: </label>
            <span>${person.math}</span><br>
            <label class='font-weight-bold'>Physics: </label>
            <span>${person.physics}</span><br>
            <label class='font-weight-bold'>Chemistry: </label>
            <span>${person.chemistry}</span><br>
            <label class='font-weight-bold'>Average score: </label>
            <span>${person.calcAverage()}</span>
            `
        }
            break;
        case 'Employees': {
            html += `
            <label class='font-weight-bold'>Number of working days: </label>
            <span>${person.workDay}</span><br>
            <label class='font-weight-bold'>Salary by day: </label>
            <span>${new Intl.NumberFormat('vn-VN').format(person.salary)} VND</span><br>
            <label class='font-weight-bold'>Total salary: </label>
            <span>${new Intl.NumberFormat('vn-VN').format(person.calcSalary())} VND</span>
            `
        }
            break;
        case 'Customers': {
            html += `
            <label class='font-weight-bold'>Company name: </label>
            <span>${person.companyName}</span><br>
            <label class='font-weight-bold'>Invoice value: </label>
            <span>${person.invoiceValue}</span><br>
            <label class='font-weight-bold'>Evaluate: </label>
            <span>${person.evaluate}</span>
            `
        }
    }
    getElement('#detailsBody').innerHTML = html;
}

// Hàm reset các input Student
function resetInputStudent() {
    getElement("#studentId").value = "";
    getElement("#studentName").value = "";
    getElement("#studentAddress").value = "";
    getElement("#studentEmail").value = "";
    getElement("#math").value = "";
    getElement("#physics").value = "";
    getElement("#chemistry").value = "";
    getElement("#tbStudentId").style.display = "none";
    getElement("#tbStudentName").style.display = "none";
    getElement("#tbStudentAddress").style.display = "none";
    getElement("#tbStudentEmail").style.display = "none";
    getElement("#tbMath").style.display = "none";
    getElement("#tbPhysics").style.display = "none";
    getElement("#tbChemistry").style.display = "none";

    getElement("#studentId").disabled = false;

}

// Hàm reset các input Employee
function resetInputEmployee() {
    getElement("#employeeId").value = "";
    getElement("#employeeName").value = "";
    getElement("#employeeAddress").value = "";
    getElement("#employeeEmail").value = "";
    getElement("#numberWorking").value = "";
    getElement("#salaryByDay").value = "";
    getElement("#tbEmployeeId").style.display = "none";
    getElement("#tbEmployeeName").style.display = "none";
    getElement("#tbEmployeeAddress").style.display = "none";
    getElement("#tbEmployeeEmail").style.display = "none";
    getElement("#tbNumberWorking").style.display = "none";
    getElement("#tbSalaryByDay").style.display = "none";

    getElement("#employeeId").disabled = false;
}

// Hàm reset các input Customer
function resetInputCustomer() {
    getElement("#customerId").value = "";
    getElement("#customerName").value = "";
    getElement("#customerAddress").value = "";
    getElement("#customerEmail").value = "";
    getElement("#companyName").value = "";
    getElement("#invoiceValue").value = "";
    getElement("#evaluate").value = "Select brand";
    getElement("#tbCustomerId").style.display = "none";
    getElement("#tbCustomerName").style.display = "none";
    getElement("#tbCustomerAddress").style.display = "none";
    getElement("#tbCustomerEmail").style.display = "none";
    getElement("#tbCompanyName").style.display = "none";
    getElement("#tbInvoiceValue").style.display = "none";
    getElement("#tblEvaluate").style.display = "none";

    getElement("#customerId").disabled = false;
}

// VALIDATION Student
function isValidateStudent() {
    let isValid = true;

    // Student ID:
    let id = getElement("#studentId").value;
    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        getElement("#tbStudentId").innerHTML =
            "Mã học sinh không được để trống và phải chứa 6 kí tự trở lên";
        getElement("#tbStudentId").style.display = "block";
        getElement("#tbStudentId").style.color = "red";
    } else {
        getElement("#tbStudentId").innerHTML = "";
        getElement("#tbStudentId").style.display = "none";
    }

    // Student Name:
    let name = getElement("#studentName").value;
    if (!name.trim() || (!/(^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$)/.test(name))) {
        isValid = false;
        getElement("#tbStudentName").innerHTML =
            "Tên học sinh không được để trống và phải là chữ";
        getElement("#tbStudentName").style.display = "block";
        getElement("#tbStudentName").style.color = "red";
    } else {
        getElement("#tbStudentName").innerHTML = "";
        getElement("#tbStudentName").style.display = "none";
    }

    // Student Email
    let email = getElement("#studentEmail").value;
    if (!email.trim() || (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
        isValid = false;
        getElement("#tbStudentEmail").innerHTML = "Email không được để trống. Vui lòng kiểm tra lại email";
        getElement("#tbStudentEmail").style.display = "block";
        getElement("#tbStudentEmail").style.color = "red";
    } else {
        getElement("#tbStudentEmail").innerHTML = "";
        getElement("#tbStudentEmail").style.display = "none";
    }

    // Address, Math, Physics, Chemistry
    let isEmptyAddress = isCheckEmpty(
        "studentAddress",
        "tbStudentAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyMath = isCheckEmpty(
        "math",
        "tbMath",
        "Điểm toán không được để trống"
    );
    let isEmptyPhysics = isCheckEmpty(
        "physics",
        "tbPhysics",
        "Điểm vật lý không được để trống"
    );
    let isEmptyChemistry = isCheckEmpty(
        "chemistry",
        "tbChemistry",
        "Điểm hóa không được để trống"
    );

    if (
        isEmptyAddress ||
        isEmptyMath ||
        isEmptyPhysics ||
        isEmptyChemistry
    ) {
        isValid = false;
    }

    return isValid;
}

// VALIDATION Employee
function isValidateEmployee() {
    let isValid = true;

    // Employee ID:
    let id = getElement("#employeeId").value;
    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        getElement("#tbEmployeeId").innerHTML =
            "Mã nhân viên không được để trống và phải chứa 6 kí tự trở lên";
        getElement("#tbEmployeeId").style.display = "block";
        getElement("#tbEmployeeId").style.color = "red";
    } else {
        getElement("#tbEmployeeId").innerHTML = "";
        getElement("#tbEmployeeId").style.display = "none";
    }

    // Employee Name:
    let name = getElement("#employeeName").value;
    if (!name.trim() || (!/(^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$)/.test(name))) {
        isValid = false;
        getElement("#tbEmployeeName").innerHTML =
            "Tên nhân viên không được để trống và phải là chữ";
        getElement("#tbEmployeeName").style.display = "block";
        getElement("#tbEmployeeName").style.color = "red";
    } else {
        getElement("#tbEmployeeName").innerHTML = "";
        getElement("#tbEmployeeName").style.display = "none";
    }

    // Employee Email
    let email = getElement("#employeeEmail").value;
    if (!email.trim() || (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
        isValid = false;
        getElement("#tbEmployeeEmail").innerHTML = "Email không được để trống. Vui lòng kiểm tra lại email";
        getElement("#tbEmployeeEmail").style.display = "block";
        getElement("#tbEmployeeEmail").style.color = "red";
    } else {
        getElement("#tbEmployeeEmail").innerHTML = "";
        getElement("#tbEmployeeEmail").style.display = "none";
    }

    // Address, numberWorking, salaryByDay
    let isEmptyAddress = isCheckEmpty(
        "employeeAddress",
        "tbEmployeeAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyNumberWorking = isCheckEmpty(
        "numberWorking",
        "tbNumberWorking",
        "Số ngày làm không được để trống"
    );
    let isEmptySalaryByDay = isCheckEmpty(
        "salaryByDay",
        "tbSalaryByDay",
        "Lương theo ngày không được để trống"
    );

    if (
        isEmptyAddress ||
        isEmptyNumberWorking ||
        isEmptySalaryByDay
    ) {
        isValid = false;
    }

    return isValid;
}

// VALIDATION Cusstomer
function isValidateCustomer() {
    let isValid = true;

    // Customer ID:
    let id = getElement("#customerId").value;
    if (!id.trim() || (!/\b[?=\d]{4,6}\b/.test(id))) {
        isValid = false;
        getElement("#tbCustomerId").innerHTML =
            "Mã khách hàng không được để trống và phải chứa 6 kí tự trở lên";
        getElement("#tbCustomerId").style.display = "block";
        getElement("#tbCustomerId").style.color = "red";
    } else {
        getElement("#tbCustomerId").innerHTML = "";
        getElement("#tbCustomerId").style.display = "none";
    }

    // Customer Name:
    let name = getElement("#customerName").value;
    if (!name.trim() || (!/(^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$)/.test(name))) {
        isValid = false;
        getElement("#tbCustomerName").innerHTML =
            "Tên khách hàng không được để trống và phải là chữ";
        getElement("#tbCustomerName").style.display = "block";
        getElement("#tbCustomerName").style.color = "red";
    } else {
        getElement("#tbCustomerName").innerHTML = "";
        getElement("#tbCustomerName").style.display = "none";
    }

    // Customer Email
    let email = getElement("#customerEmail").value;
    if (!email.trim() || (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
        isValid = false;
        getElement("#tbCustomerEmail").innerHTML = "Email không được để trống. Vui lòng kiểm tra lại email";
        getElement("#tbCustomerEmail").style.display = "block";
        getElement("#tbCustomerEmail").style.color = "red";
    } else {
        getElement("#tbCustomerEmail").innerHTML = "";
        getElement("#tbCustomerEmail").style.display = "none";
    }

    // Address, companyName, invoiceValue, evaluate
    let isEmptyAddress = isCheckEmpty(
        "customerAddress",
        "tbCustomerAddress",
        "Địa chỉ không được để trống"
    );
    let isEmptyCompanyName = isCheckEmpty(
        "companyName",
        "tbCompanyName",
        "Tên công ty không được để trống"
    );
    let isEmptyInvoiceValue = isCheckEmpty(
        "invoiceValue",
        "tbInvoiceValue",
        "Trị giá hóa đơn không được để trống"
    );
    let isEmptyEvaluate = isCheckEmpty(
        "evaluate",
        "tbEvaluate",
        "Vui lòng chọn đánh giá"
    );

    if (
        isEmptyAddress ||
        isEmptyCompanyName ||
        isEmptyInvoiceValue ||
        isEmptyEvaluate
    ) {
        isValid = false;
    }

    return isValid;
}

function isCheckEmpty(idInput, idSpan, message) {
    let valueInput = getElement(`#${idInput}`).value;
    if (!valueInput.trim()) {
        getElement(`#${idSpan}`).innerHTML = message;
        getElement(`#${idSpan}`).style.display = "block";
        getElement(`#${idSpan}`).style.color = "red";
        return true;
    }
    getElement(`#${idSpan}`).style.display = "none";
    return false;
}

// ====================== DOM ========================
getElement("#btnAddStudent").addEventListener("click", () => {
    getElement(".title__Student").innerHTML = "Add Student";
    getElement(".footer__Student").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn__addStudent" onclick="createStudent()">Add Student</button>
      `;
    resetInputStudent();
});

getElement("#btnAddEmployee").addEventListener("click", () => {
    getElement(".title__Employee").innerHTML = "Add Employee";
    getElement(".footer__Employee").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn__addEmployee" onclick="createEmployee()">Add Employee</button>
      `;
    resetInputEmployee();
});

getElement("#btnAddCustomer").addEventListener("click", () => {
    getElement(".title__Customer").innerHTML = "Add Customer";
    getElement(".footer__Customer").innerHTML = `
      <button class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button class="btn btn__addCustomer" onclick="createCustomer()">Add Customer</button>
      `;
    resetInputCustomer();
});

function storePersonList() {
    const list = [...personList];
    list.forEach((item) => {
        item["type"] = item.constructor.name;
    })

    const json = JSON.stringify(list);
    localStorage.setItem("personList", json);
}

function getPersonList() {
    // Lấy danh sách data từ LocalStorage với key là personList
    const json = localStorage.getItem("personList");

    if (!json) {
        return [];
    }

    // Chuyển JSON thành Array
    const person = JSON.parse(json);
    for (let index = 0; index < person.length; index++) {
        const personL = person[index];
        switch (personL.type) {
            case "Students":
                personL[index] = new Students(
                    personL.id,
                    personL.name,
                    personL.address,
                    personL.email,
                    personL.math,
                    personL.physics,
                    personL.chemistry
                )
                break;

            case "Employees":
                personL[index] = new Employees(
                    personL.id,
                    personL.name,
                    personL.address,
                    personL.email,
                    personL.workDay,
                    personL.salary
                )
                break;

            case "Customers":
                personL[index] = new Customers(
                    personL.id,
                    personL.name,
                    personL.address,
                    personL.email,
                    personL.companyName,
                    personL.invoiceValue,
                    personL.evaluate
                )
                break;
        }
        person[index] = personL[index];
    }
    return person;
}

// ================= Helper =================
function getElement(selector) {
    return document.querySelector(selector);
}
