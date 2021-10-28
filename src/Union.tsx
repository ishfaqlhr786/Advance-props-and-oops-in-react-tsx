// assign multiple data types to a single variable by using union data types
export const Union=()=>{


let code: (string | number| boolean);
//code = 123;   // OK
//code = "ABC"; // OK
code = false; // Compiler Error
let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
arr.push(false)
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 

//let empId: string | number;
//empId = 111; // OK
//empId = "E111"; // OK
//empId = true; // Compiler Error
console.log(code)

var a="pakistan";// inference data type is string when we did not specify data type of s  value
console.log(a)
return(
    <>
    </>
)
}