
 export const Enum=()=>{

//const enum MyResponse {  //string enum
//  No = "lahore",
  //Yes = "khi"
//}
//const enum MyResponse {  //numeric enum
//  No,
//  Yes
//}
enum MyResponse { //Hetrogenius enums
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending,
    rollno=9,
    name="affan"
}
function respond(message: MyResponse): void {
  console.log(message);


}
respond(MyResponse.name);
return (<>
<h3>{MyResponse.name}</h3>
{MyResponse[3]}
</>)
}


enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}

console.log(PrintMedia.Book) ;   // returns  3
console.log(PrintMedia["Book"]);// returns  3
//PrintMedia[3];         // returns  Magazine