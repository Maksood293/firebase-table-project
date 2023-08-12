import React,{useContext, useState} from 'react'
import "./header.css";
import Store from './context';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const {toggle1,handleToggle1} = useContext(Store)
  const [profile,setProfile] = useState(false)
  
  return (
    <>  
  <div className={`${!toggle1?'collapsed':'sidebar'}`}>
  <i className='fa-solid fa-xmark' onClick={handleToggle1} style={{fontSize:'1.5em',marginBottom:'15px',marginTop:'25px',}}></i>
  <h4  onClick={(prev)=>setProfile(!prev)} className='icon'><Link to="/profile" style={{color:'skyblue',textDecoration:'none',fontSize:'1em'}}><i className="fa-solid fa-user icon" ></i>{!toggle1 ?'':'Profile'}</Link></h4>
  <h4><i className="fa-solid fa-inbox icon"></i>{!toggle1 ?'':'Inbox'}</h4>
  <h4><i className="fa-brands fa-rocketchat icon"></i>{!toggle1 ?'':'Chat'}</h4>
  <h4><i className="fa-solid fa-gear icon"></i>{!toggle1 ?'':'Setting'}</h4>
  <h4><i className="fas fa-sign-out-alt icon"></i>{!toggle1 ?'':'Log out'}</h4>
  </div>
    </>
  )
}

export default Sidebar;