// import { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios'

// function App() {
//   const [inc,setInc]=useState(0);
//   const [sum ,setSum]=useState(0)

//   let count=0

//   for(let i=0;i<=sum;i++){
//     count=count+i
//   }

//   return <div>
  
//     <Todo id={2} />

//     {/* sum */}
//     <div>
//      <input type="text" onChange={(e)=>{setSum(e.target.value)}}></input>
//       <button onClick={()=>setInc(inc+1)}>Counter {inc}</button>
//       <h2>Sum of {sum} is {count}</h2>
//     </div>

//   </div>
// }




// function Todo({id}) {
//   const [todo, setTodo] = useState({});
//  const [od,setod]=useState(id)

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + od)
//       .then(async function(res) {
//         // const json = await res.json();
//         setTodo (res.data.todo);
//       })
//   }, [od])

//   return <div>
//    <button onClick={(e)=>{if(e.target.innerText==1){setod(e.target.innerText)}}}>1</button>
//    <button onClick={(e)=>{if(e.target.innerText==2){setod(e.target.innerText)}}}>2</button>
//    <button onClick={(e)=>{if(e.target.innerText==3){setod(e.target.innerText)}}}>3</button>
//    <button onClick={(e)=>{if(e.target.innerText==4){setod(e.target.innerText)}}}>4</button>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// export default App;


/*
import  { useState, useMemo } from 'react';

const ExpensiveCalculation = ({ value }) => {
  const expensiveResult = useMemo(() => {
    // Simulating a computationally expensive operation
    console.log('Calculating expensive result...');
    return value * 2;
  }, [value]); // Dependency array: recalculates when 'value' changes

  return (
    <div>
      <p>Value: {value}</p>
      <p>Expensive Result: {expensiveResult}</p>
    </div>
  );
};

const MemoExample = () => {
  const [inputValue, setInputValue] = useState(5);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <ExpensiveCalculation value={inputValue} />
    </div>
  );
};

export default MemoExample;
*/

/*
import React, { useState, useCallback } from 'react';

const ChildComponent = ({ onClick }) => {
  console.log('ChildComponent rendering...');
  return <button onClick={onClick}>Click me</button>;
};

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // Regular callback function
  const handleClick = () => {
    console.log('Button clicked!');
    setCount((prevCount) => prevCount + 1);
  };

  // Memoized callback using useCallback
  const memoizedHandleClick = useCallback(handleClick, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={memoizedHandleClick} />
    </div>
  );
};

export default CallbackExample;
*/


/*
//custom hook
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [od,setod]=useState(2)
  return <div>
      <button onClick={(e)=>{if(e.target.innerText==1){setod(e.target.innerText)}}}>1</button>
    <button onClick={(e)=>{if(e.target.innerText==2){setod(e.target.innerText)}}}>2</button>
    <button onClick={(e)=>{if(e.target.innerText==3){setod(e.target.innerText)}}}>3</button>
    <button onClick={(e)=>{if(e.target.innerText==4){setod(e.target.innerText)}}}>4</button>
    <Todo id={od} />
  </div>
}

function Todo({id}) {
 const todo=useTodos(id)

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}


function useTodos(id){

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return todo

}

export default App;
*/

