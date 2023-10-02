import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { GlobalStyles } from '../GlobalStyles'
import styled from 'styled-components'
function Navbar() {
  return (
  
<Wrapper>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
          <NavLink className="navbar-brand" >
            <img src="logo.png" alt="logo" width={50} height={60} />TrackMeet
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5 py-2">
        <li className="nav-item">
  <NavLink className='nav-link active'  aria-current="page" to="/"> Home </NavLink>
        </li>
        <li className="nav-item ">
                          <NavLink className='nav-link' to="/meetinglist" >Meetings</NavLink>  </li>
                      
                          <li className="nav-item ms-5">
                          <NavLink className='nav-link' to="" id='btn' >SignUp</NavLink>  </li>               
                          <li className="nav-item ms-3">
                          <NavLink className='nav-link' to="" id='btn'>Login</NavLink>  </li>
              
                  
      </ul>
      </div>
  </div>
      </nav>
</Wrapper>
   

)
}
export default Navbar
const Wrapper = styled.div`
#btn{
  background-color: #2C3B53;
  color: white;
  border-radius: 5%;
}
`;
