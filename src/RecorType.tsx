
  export   const RecorType=()=>{
interface Product{
   price:number,
   color:string
 }
 type Pname='laptop'| 'mobile'| 'watch';

 const product1 :Record<Pname,Product>={
   laptop:{price:2000,color:"red"},
   mobile:{price:20000,color:"green"},
   watch:{price:3000,color:"blue"}
 }
 console.log(product1.watch)
 
 console.log(product1.laptop)
return(
       
      
  // use keyName to get current key's name
  // and a[keyName] to get its value

 
       <>
   
<h2> laptop: color:
{product1.laptop.color} proice:{product1.laptop.price}</h2>
<h2> watch: color
{product1.watch.color} proice:{product1.watch.price}</h2>
<h2>
    mobile : color
{product1.mobile.color}  proice:{product1.mobile.price}</h2>
    </>
)
  }

   /* <>
 {
    Object.keys(product1.).map((item)=> {
       
 return (
       <>
       <h2 >{item } </h2>
      
       </>)
        })
      
  // use keyName to get current key's name
  // and a[keyName] to get its value
}

) 
 
    </>
    */
  

   


   
   

  
