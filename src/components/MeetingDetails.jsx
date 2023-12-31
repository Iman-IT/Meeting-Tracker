import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function MeetingDetail({ data }) {
  const { id } = useParams(); // Assuming each meeting has a unique id

  const meeting = data.find(item => item.id === id);

  if (!meeting) {
    return <div>Meeting not found</div>;
  }

  return (
    <Wrapper className="contianer">
      <div className="row mx-auto d-flex justify-content-center align-items-center">
<div className="col-12 col-md-6 col-sm-4 mt-3" id='border'>
 
    <div className='card shadow-lg px-5 py-5'>
      <h4>Meeting Title: </h4>
            <h2>{meeting.meetingName}</h2>
            <h8>Description: {meeting.description}</h8>
            <div className="row mt-3">
            <div className="col-12 col-md-6 ">
            <h5> <p>Country Head:</p> { meeting.countryHeadName }   </h5>
    
            <h5> <p>Country:</p>  { meeting.countryName}</h5>
               <p><span> Date:</span> {meeting.date} </h8>
            </div>
            <div className="col-12 col-md-6">
            <h5> <p>Second Country Head:</p>  { meeting.secondCountryHeadName }   </h5>
    
    <h5> <p>Second Country:</p>  { meeting.secondCountryName}</h5>
                <p><span> Location:</span> { meeting.location} </h8>
            </div>
            </div>
           
        </div>
        </div>
      </div></Wrapper>
  );
}

export default MeetingDetail;

const Wrapper = styled.div`
#border{
  border: 2px solid #2C3B53;
}
h5{
  color: #2C3B53;
}
/* span{
  color: black;
  font-size: 1.2rem;
} */

`; 
