// create your App component here
import React, { useEffect, useState } from "react"
export default function App(){
    const [image,setImage]=useState(null)
    useEffect(()=>{
fetch((`https://dog.ceo/api/breeds/image/random`)).then(data=>data.json()).then(data=>{
setImage(data.message)

})
    },[])
return(<div>
{console.log(image,"form get")}

{image? (
<img  src={image} alt="A Random Dog"/>

    ):<p>Loading ...</p>} 

</div>)
}
Footer