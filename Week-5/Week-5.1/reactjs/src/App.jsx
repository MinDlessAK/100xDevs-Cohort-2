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


import React from 'react'

function App() {

  return (
    <div>
      <Button></Button>
    </div>
  )
}

function Button() {
  const [count, setCount] = React.useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  // return React.createElement(
  //   'button',
  //   { onClick: onButtonClick },
  //   `Counter ${count}`
  // );
    return <button onClick={onButtonClick}>Counter {count}</button>

}

export default App

