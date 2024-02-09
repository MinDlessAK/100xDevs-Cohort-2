//Routing
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import  Dashboard  from './components/Dashboard'
// import  Landing  from './components/Landing'




// // import { Suspense ,lazy } from 'react'

// //For loading lazy
// // const  Dashboard = lazy(()=> import ('./components/Dashboard'))
// // const  Landing = lazy(()=> import ('./components/Landing'))


// function App() {
  
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         {/* for loading lazy */}
//         {/* <Routes>
//             <Route path="/dashboard" element={<Suspense> <Dashboard /></Suspense>  } />
//             <Route path="/" element={<Suspense> <Landing /></Suspense>} />
//         </Routes> */}
//            <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={ <Landing />} />
//            </Routes> 
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//       <div>
//         <button onClick={() => {
//           navigate("/");
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard</button>

//       </div>
//   </div>
// }
 
// export default App 
    
  
/*  
//Props drilling 
// its means passing data of state through props to its child components
//state should be  in least parent component not in top component
import { useState } from "react"

function App() {
  const [count,setCount]=useState(0)

  return (
    <div>
    <Count count={count} setCount={setCount}/>
    </div>
  )
}

function Count({count,setCount}){
    return <div>
      {count}
      <Button count={count} setCount={setCount}/>
    </div>
}

function Button({count,setCount}){
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>

  </div>

}

export default App
*/

//contextApi
//props drilling  it not optimize way to pass data through state that why we use context from now
//context is like define state in js/ts file then use it through props/import etc. 
//this method is usefull  and avoid rerenders


import Heading from './Heading.jsx';
import Section from './Section.jsx';

export default function Page() {
  return (
    <Section level={1}>
    <Heading>Title</Heading>
    <Section level={2}>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Heading>Heading</Heading>
      <Section level={3}>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Heading>Sub-heading</Heading>
        <Section level={4}>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
          <Heading>Sub-sub-heading</Heading>
        </Section>
      </Section>
    </Section>
  </Section>
  );
}


// It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>. This way you could enforce that all headings in the same section have the same size:

// <Section level={3}>
//   <Heading>About</Heading>
//   <Heading>Photos</Heading>
//   <Heading>Videos</Heading>
// </Section>
// But how can the <Heading> component know the level of its closest <Section>? That would require some way for a child to “ask” for data from somewhere above in the tree.










