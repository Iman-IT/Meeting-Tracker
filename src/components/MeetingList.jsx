import React, { useState ,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import data from './data.json';
import styled from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';

function MeetingList() {
  //const [ sortedData, setSortedData ] = useState( data );
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ error, setError ] = useState( null );
 


  useEffect(() => {
    // Simulate a fetch request (replace this with your actual data fetching logic)
    setTimeout(() => {
      try {
        // Assuming data.json is available and contains valid JSON
        setSortedData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    },); // Simulating a delay for loading
  }, []);

 

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'date') {
      sortByDate();
    }
    else if ( selectedOption === 'alphabet' )
    {
      sortAlphabetically();
    }
  };
  const currentDate = new Date();
  const sortByDate = () => {
    const sorted = [...sortedData].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSortedData(sorted);
  };

  // const sortAlphabetically = () => {
  //   const sorted = [...sortedData].sort((a, b) => a.countryName.localeCompare(b.countryName));
  //   setSortedData( sorted );
  //   console.log( sortedData );
  // };
  const sortAlphabetically = () => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a.countryName && b.countryName) {
        return a.countryName.localeCompare(b.countryName);
      }
      return 0; // If either countryName is undefined, consider them equal
    });
    setSortedData(sorted);
  };

  // if (loading) {
  //    alert( 'Loading...' );
  // }

  if (error) {
    alert( error.message );
  }
  if ( !loading && !error )
  {
   
    alert('Data fetched successfully!');
  }

  return (
    <>
      <Wrapper className="container align-items-center justify-content-center">
        <div className="row mx-auto">
          <div className="col-12 col-md-6 col-sm-6 "></div>
          <ul style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <li className='nav-item pt-2'>
              <select className='form-select form-control' onChange={handleSortChange}>
                <option value="date">Sort by Date</option>
                <option value="alphabet">Sort by CountryName</option>
              </select>
            </li>
          </ul>

          {sortedData.map((item, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card">
                <div className="card-body">
    
                  <h5 className="card-title">{item.meetingName}
                    </h5>
                  <h6>Country : {item.countryName}</h6>
                  <p className="card-text">Date: {item.date}</p>
                  <p className="card-text">Description : { item.description } </p>
                  
                 
                  <li className='nav-item '><NavLink to={`/details/${ item.id }`} >
                   <a href="" id='btn' className='px-2 py-2'> Details</a>
                    {new Date( item.date ) > currentDate ? (
                  
                      <span className="text-white float-right ms-5 px-3 py-2 bg-success border">Upcoming</span> )
                      : (
                  <span className="text-white float-right ms-5 px-3 py-2 border bg-danger">Past</span>
                )}
                  </NavLink></li>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default MeetingList;
const Wrapper = styled.div`
#btn{
  background-color: #2C3B53;
  color: white;
  
}
`;
