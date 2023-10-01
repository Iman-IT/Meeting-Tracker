import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes,Route ,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import MeetingList from './components/MeetingList';
import { GlobalStyles } from './GlobalStyles';
import MeetingDetails from './components/MeetingDetails'
import data from './components/data.json';

function App() {

  
  return (
    <>
    <GlobalStyles/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='meetinglist' element={<MeetingList data={data} />} />
        <Route path='details/:id' element={<MeetingDetails data={data} />} />
        
        
      </Routes>
    

    </>
  )
}

export default App
