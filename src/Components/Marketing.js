import { useState } from "react"

export default function Marketing(){
   const [name,setName] = useState("")

    return(
        <>
        <h1>Hi {name}</h1>
        <input value={name} onChange={
        (e)=>{
    setName(e.currentTarget.value)
             }
        }></input>
        </>
        

    )
}