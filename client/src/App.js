import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import CameraCard from './components/cards/VideoCard';
import HomePage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';



function App() {
  const [ loggedInUser , setLoggedInUser ] = useState('')
  return (
    <>
      <Navbar email={loggedInUser}></Navbar>
      {/* <CameraCard></CameraCard> */}

      <div className=' mt-[150px] mr-[100px]'>
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={<HomePage setLoggedInUser={setLoggedInUser}/>}
            />
            <Route
              exact
              path='/dashboard'
              element={<Dashboard />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
