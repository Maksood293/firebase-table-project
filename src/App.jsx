
  import React from 'react'
import LoginPage from './pages/Login'
import TableContent from './pages/tableContent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignupPage from './pages/signuppage'
import UserProfile from './pages/UserProfile'

  const App = () => {
    return (

    <>
  <BrowserRouter>
  <Routes>
    <Route path='/'  element={<LoginPage/>}/>
   
    <Route path='/tablecontent'  element={<TableContent/>}/> 
    <Route path='/signup'  element={<SignupPage/>}/>
    <Route path='/profile'  element={<UserProfile/>}/>

  </Routes>
  </BrowserRouter>
   <div style={{width:'100%',position:'absolute', bottom:'0px', textAlign:'center', borderTop:'2px solid black', paddingTop:'5px'}}>
   <span> Created by <strong>Priyanaka</strong>, © 2023 table project</span>
   </div>
    </>
    )
  }
  
  export default App