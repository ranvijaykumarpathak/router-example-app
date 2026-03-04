import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Home from "./Component/Home"
import Dashboard from "./Component/Dashboard"
import User from "./Component/User"
import Admin from "./Component/Admin"
import Header from "./Component/Header"

function App(){
  return (
        <>
         <BrowserRouter>
          <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about-us" element={<About/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
           <Route path="/dashboard" element={<Dashboard/>}>
              <Route path="user" element={<User/>}/>
               <Route path="admin" element={<Admin/>}/>
              
           </Route>
          <Route path="*" element={<h2 className="text-danger">This page not found- 404 Error</h2>}/>

      </Routes>
  
    </BrowserRouter>
       
        </>
  )
}
export default App
