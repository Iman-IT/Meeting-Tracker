import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Wrapper className="container  my-5">
        <div className="row">
          <div className="col-12 col-md-6 col-sm-12 mb-4">
            <p className="pt-5">Let's Introduce</p>
            <h1 className=''>Country Heads Meeting Tracker</h1>
            <a href="" id='btn' className='px-2 py-2 mt-5 justify-content-center align-items-center'> Details</a>
          </div>
          <div className="col-12 col-md-6 col-sm-12">
            <img src="2.jpg" className="img-fluid" alt="Meeting Tracker" id="main" />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`

a{
  background-color: #2C3B53;
  color: white;
  border-radius: 5%;
  font-size:25px;
  width:50px

}
`;