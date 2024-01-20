import { useState } from "react"

function App() {
  // const [change,setchange]=useState('harkirat')
    const [title,setTitle]=useState(0)

  function ak(){
    setTitle("my name is" + Math.random())
  }
  
 return (
    <div>
         {/* <Update/> */}
        <button onClick={ak}>change</button> 
        <Header title={title} ></Header>
        <Header title="chupereactwalle " ></Header>
        <Header title="chupereactwalle " ></Header>
        <Header title="chupereactwalle " ></Header>
        {/* <button onClick={()=>{setchange(Math.random())}}>change</button>
        <h1>my name is{change}</h1>
        <h1>kdkndcskln</h1> */}
    </div>
  )
}

// function Update(){
//   const [title,setTitle]=useState(0)

//   function ak(){
//     setTitle(Math.random())
//   }
//   return(
//     <>
//      <button onClick={ak}>change</button>
//      <h1>My name is {title}</h1>
//     </>
//   )

// }


function Header({title}) {
  return (
     <div>
         {title}
     </div>
   )
 }


 


export default App
