import { futimesSync } from "fs";

export const Ineterface =()=>{
interface KeyPair {
    key: number;
    value: string;
}
// single type array

let kv1: KeyPair = { key:1, value:"Steve" }; // OK

let kv2: KeyPair = { key:2, value:"Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'

let kv3: KeyPair = { key:3, value:"adil" }; // Compiler Error: 
console.log(kv3)
let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana','carrot']; 
fruits.push('pine apple')
console.log(fruits)
let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 
var ObjArray:Array<any>;
ObjArray=[
    {id:1,name:"asif"},
    {id:2,name:"ashraf"}
]
ObjArray.push({id:3,name:"amir"})
ObjArray.push({id:4,name:"asim"})
ObjArray.push({id:5,name:"nasir"})
console.log(ObjArray);
var users = [{
        "id": "1",
        "fname": "john",
        "lname": "Ken",
        "role": "admin",
    },
   {
        "id": "2",
        "fname": "Eric",
        "lname": "Dawn",
        "role": "user",
    },
    {
        "id": "3",
        "fname": "Andrew",
        "lname": "Karvin",
        "role": "admin",
    },
]

// <h3>{kv3.value}</h3>

return(
    <>
   <h3>data from array of objects in typescript</h3>
    {
    /*    
 users.map(i=>{
     return(
         <h2>{i.fname}</h2>
     )
 }) */
   // })
ObjArray.map(i=>{
    return(
        <h2 key={i.id}> name:{i.name}  and   id:{i.id}</h2>
    )
})

    }
    
    </>
)

}