export const Interface1=()=>{
    interface KeyValueProcessor  //interfaces as functios
{
    (key: number, value: string): void;
};
 interface KeyValueProcessor1
{
    (val1: number, val2: number): number;
};
function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}
function sum(val1:number,val2:number):number{
    return val1 + val2
}

let kvp: KeyValueProcessor = addKeyValue;
let kvp1: KeyValueProcessor1= sum;
kvp(1, 'Bill'); 
let r=sum(2,3);
console.log("sum of 2 and 3 is"+r);
// below is interfaces as array
interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
 console.log(numArr[0])  ;

console.log(numArr[1])  ;
interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";
console.log(strArr["TS"])
console.log(strArr["JS"])


// interface as object of array
interface Iinput {
  label: string
  placeholder: string
 // register: any
  type?: string
  required: boolean
}


// This is how it can be done

const inputs: Array<Iinput> = [
  {
    label: "Title",
    placeholder: "Bought something",
    //register: register,
    required: true,
  },
  {
    label: "lahore",
    placeholder: "big city lhr",
    //register: register,
    required: false,
  },
   {
    label: "khi",
    placeholder: "big city karachi",
    //register: register,
    required: false,
  }
]
inputs.push({label:"peshawer",placeholder:"kpk",required:false})
console.log(inputs)

    return(
        <>
  {
    /*    
 users.map(i=>{
     return(
         <h2>{i.fname}</h2>
     )
 }) */
   // })
   
inputs.map(i=>{
    return(
        <h2 key={i.label}> placeholder:{i.placeholder} label:{i.label} </h2>
    )
})

    }
        </>
    )
}