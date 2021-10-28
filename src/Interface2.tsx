//  optional properties in interface

export const Interface2 =()=>{
interface IEmployee {
    empCode: number;
    empName: string;
    empDept?:string;  // ? is used to indicate  optional property 
}

let empObj1:IEmployee = {   // OK
    empCode:1,
    empName:"Steve"
}

let empObj2:IEmployee = {    // OK
    empCode:1,
    empName:"Bill",
    empDept:"IT"
}
console.log(empObj1)

// read only property
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen  = { SSN: 110555444, name: 'James Bond' }

personObj.name = 'Steve Smith'; // OK
//personObj.SSN = '333666888'; // Compiler Error
console.log(personObj.name )


// extending interfaces


interface IPerson {
    name: string;
    gender: string;
}

interface IEmployee1 extends IPerson {
    empCode: number;
}

let empObj44:IEmployee1;


 empObj44 = {
  //  empCode:1,
    name:"Bill",
    gender:"Male",
    empCode:1,

}
console.log( empObj44)
    return(
        <>
        </>
    )
}