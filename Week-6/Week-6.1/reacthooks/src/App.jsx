import { useState} from "react"
// import React from "react"
// import Props from "./Props"

// let counter=4;

function App() {
  // const [change,setchange]=useState('harkirat')
    // const [title,setTitle]=useState("my name is 0")

  // function ak(){
  //   setTitle("my name is " + Math.random())
  // }
  
  //todo
  // const[todos,setTodo]=useState([{
  //   id:1,
  //   title:"gym",
  //   description:"Go to gym today"
  //  },{
  //   id:2,
  //   title:"food",
  //   description:"eat buger today"
  //  },{
  //   id:3,
  //   title:"class",
  //   description:"attend class at 12pm"
  //  }])
  
    // function addtodo(){
    //   setTodo([...todos,{
    //     id:counter++,
    //     title:title,
    //     description:description
    //   }])
    // }
   


    // const [title,setTitle]=useState("")
    // const [description,setDescription]=useState("")
    

 return (
    <div>
        <Update /> 
         {/* <button onClick={()=>{setchange('priyanshu')}}>change</button> 
        <Props change={change} /> */}

        {/* <button onClick={ak}>change</button>
        <Header title={title} ></Header>
        <Header title={title} ></Header>
        <Header title="chupereactwalle " ></Header>
        <Header title="chupereactwalle " ></Header>
        <Header title="chupereactwalle " ></Header> */}

        {/* <button onClick={()=>{setchange(Math.random())}}>change</button>
        <h1>my name is{change}</h1>
        <h1>kdkndcskln</h1> */}
          {/* Todo */}
    

    {/* <input type="text" onChange={(e)=>{setTitle(e.target.value)}} /><br/>
    <input  type="text" onChange={(e)=>{setDescription(e.target.value)}} /><br/><br/>
    <button onClick={addtodo}>Add a todo</button><br/> */}
        {/* {todos.map(function(todo) {
          return(
           <Todo key={todo.id} title={todo.title} description={todo.description} />
           )
           })} */} 
           {/* {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)} */}

        {/* <Wrapper innercomponent={<TextComponent/>} />
        <CardWrapper>
        <TextComponent></TextComponent>
        </CardWrapper> */}

   </div>
  )
}

function Update(){
  const [title,setTitle]=useState(0)

  function ak(){
    setTitle(Math.random())
  }
  return(
    <>
     <button onClick={ak}>change</button>
     <h1>My name is {title}</h1>
    </>
  )

}


// const Header = React.memo(function Header({title}) {
//   return (
//      <div>
//          {title}
//      </div>
//    )
//  })

// function Todo({title,description}){
//     return(
//       <div>
//         <h1>{title}</h1>
//         <h2>{description}</h2>
//       </div>
//     )
// }
// function TextComponent(){
//   return<div>
//     hi there!
//   </div>
// }

// function Wrapper({innercomponent}){
//   return<>
//      <div style={{border:"2px solid black"}}>
//        {innercomponent}
//      </div>
//   </>
// }

// function CardWrapper({children}){
//      return<>
//         <div style={{border:"2px solid black"}}>
//           {children}
//         </div>
//      </>
// }


export default App
