class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id() {return this._id;}
    set id(id) {
        let id = RegExp('^[1-100]+$');
        if (idRegex.test(id))
        this._id = id;
        else throw 'ID is incorrect!';
    }

    get name() {return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) 
        this._name = name;
        else throw 'Name is incorrect!';
    }

    // get profilePic() {return this._profilePic;}
    // set profilePic(profilePic) {
    //     this._profilePic = profilePic;
    // }

    get gender() {return this._gender;}
    set gender(gender) {
        let genderRegex = RegExp('^[m|M|male|Male|f|F|female|Female]$');
        if (genderRegex.test(gender))
        this._gender = gender;
        else throw 'Gender is incorrect!';
    }

    // get department() {return this._department;}
    // set department(department) {
    //     this._department = department;
    // }

    get salary() {return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[1-100000000]+$');
        if (salaryRegex.test(salary))
        this._salary = salary;
        else throw 'Salary is incorrect!';
    }

    // get note() {return this._note;}
    // set note(note) {
    //     this._note = note;
    // }

    get startDate() {return this._startDate;}
    set startDate(startDate) {
        let startDateRegex = RegExp('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$');
        if (startDateRegex.test(startDate))
        this._startDate = startDate;
        else throw 'Date is incorrect!';
    }

    toString() {
        const options = {year:'numeric', month:'long',day:'numeric'};
        const empDate = this.startDate == undefined ? "undifined" : 
        this.startDate.toLocalDateString("en-US", options);
        return "id ="+this.id+", name ="+this.name+", salary ="+this.salary+", gender ="+this.gender+", startDate ="+empDate;
        // return "id ="+this.id+", name ="+this.name+", gender ="+this.gender+", profilePic ="+this.profilePic+", department ="+this.department+", salary ="+this.salary+", startDate ="+empDate+", note ="+this.note;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try {
employeePayrollData.name = "john";
console.log(employeePayrollData.toString());
}
catch (e) {
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());