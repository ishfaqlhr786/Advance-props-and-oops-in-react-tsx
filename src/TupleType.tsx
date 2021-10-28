
export const TupleTYpe=()=>{
   
var employee: [number, string] = [1, "Steve"];

var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
console.log(employee[1])
console.log(person[2])
var employee1: [number, string][];
employee1 = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
employee.push(4,"ahmed")
employee.push(5,"amir")
console.log(employee)
console.log(user[2])
console.log(person[2])
//console.log(employee[])
 return(
     <>
       <h2>{person[2]}</h2>
       </>
    )
}