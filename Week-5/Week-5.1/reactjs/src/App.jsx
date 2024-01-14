// import { useState } from 'react'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//     </>
//   )
// }

// export default App


//props
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  )
}

function Button(props) {

  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  // return React.createElement(
  //   'button',
  //   { onClick: onButtonClick },
  //   `Counter ${props.count}`
  // );
    return <button onClick={onButtonClick}>Counter {props.count}</button>

}

export default App



