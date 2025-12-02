const info ={
    emp_id: 1001,
    age: 25,
    salary: 150000,

    print: function(){
        console.log("Emploee ID ",this. em_id);
        console.log("Name ", this.name);
        console.log("Age",this .age );
        console.log("salary",this.salary);
    },
    
    display(){
        console.log(`Employee ID: ${this.emp_id},
        Name $ {this.emp_id},
        Age $ {this name},
        Salary : $ {this.slary}
        `);
    },

    incrementSalary(amount) {
        this.salary += amount; //this.salary =this.salary + amount;
        return this.salary;
    }
};
const department = {
    mang: 'M01',
    dept_name: 'IT',
    location: 'Karachi',

    displayDeptInfo() {
        console.log(`mang: ${this.mang},
        Department: ${this.dept_name},
        Location: ${this.location}
        `);
    }
};

// Object based inheritance
department.__proto__ = info;
