import { useState } from "react";

export default function CreateTodo() {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
  return (
    <div>
       <input id="title" type="text" placeholder='tittle' onChange={function(e){
        // const value = e.target.value
        setTitle(e.target.value)}} /><br/>
       <input id="description" type="text" placeholder="description" onChange={function(e){
        // const value = e.target.value
        setDescription(e.target.value)}} /><br />
       <button 
       onClick={()=>
       {
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(async function(res){
            const json =await res.json();
            alert("Todo Added")
        })
       }}
       >Add a todo</button>
    </div>
  )
}

