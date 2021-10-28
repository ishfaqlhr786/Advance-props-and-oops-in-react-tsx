import React from 'react'

export const Aeertion: React.FC = () => {
 const [name, setName] = React.useState<string>("asad");

//console.log(name)
return(
   <>
   <h2>{name}</h2>
   <button onClick={()=>{
   setName("amir")
}}>change name</button>
   </>
)

}

