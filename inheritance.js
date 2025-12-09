class Employee{
    #salary
    constructor(id,name,age,salary){
        this.id_=id,
        this.name=name,
        this.age=age,
        this.#salary= salary
    }
    print(){
        console.log(`${this._id},
         ${this.name},
          ${this.age},
           ${this.#salary}
        `);
    }
}



class Department extends Employee{
    #dept_name
    constructor(id,name,age,salary,dname,dhod){
        super(id,name,age,salary);
        this.#dept_name = dname;
        this._Hod= dhod;


    }
    print() {

        super.print();
        return `${this.#dept_name}-${this._dhad}`;                
    }
}






let emp1 = new Employee(1, "abc",20,1010)
let dept2 = new Department(2,"Hadi",65,75000, 'IT', 'Zain');
console.log(dept2.print());
//