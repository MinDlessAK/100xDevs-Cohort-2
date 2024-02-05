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
    
  
  
//Props drilling 
// its means passing data of state through props to its child components
//state should be  in least parent component not in top component

