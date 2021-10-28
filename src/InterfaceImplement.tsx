export const InetrfaceImplement=()=>{
interface IEmployee {
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
    getSalary1:(empCode:number) =>number;
}

class Employee implements IEmployee { 
    empCode: number;
    name: string;

    constructor(code: number, name: string) { 
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode:number):number { 
        return 20000;
    }
     getSalary1(empCode:number):number { 
        return 50000;
    }
}
//let sal=getSalary(1);
let emp = new Employee(1, "asad");
let emp1=new Employee(2,"asif");
let  emp2=new Employee(3,"umer");
let sal=emp.getSalary(emp.empCode);
let sal1=emp1.getSalary(emp1.empCode);
let sal2=emp2.getSalary1(emp2.empCode)
console.log("salary of    "+emp.name    +"   is   ="+sal)
console.log("salary of    "+emp1.name    +"   is   ="+sal1)
console.log("salary of    "+emp2.name    +"   is   ="+sal2)

    return(
        <>
        <h2>implement interfaces</h2>
        <h3>salary of umeris {sal2}</h3>
        </>
    )
}