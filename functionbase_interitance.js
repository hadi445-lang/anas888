// function constructor or function prototype based inheritance

function Employee(id,name, age, salary) {
    this.emp_id = id;
    this. name = name;
    this.age = age;
    this.salary = salary;
}

// function base Inheritance
Employee.prototype.print = function() {
    console.log(`Employee ID: ${this.emp_id},
        Name: ${this.name},
        Age: ${this.age},
        Salary: ${this.salary}`
    );
};

// instances // objects
let emp1 = new Employee(101, 'Ali khan', 25, 15000);
emp1.print();
let emp2 = new Employee(102, 'Ahmed', 30, 20000);
emp2.print();
