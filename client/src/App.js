import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import CameraCard from './components/cards/VideoCard';
import HomePage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Cookies from 'js-cookie';



function App() {
  const [ loggedInUserEmail , setLoggedInUserEmail ] = useState('')
  const [ userIsLoggedIn , setUserIsLoggedIn ] = useState(false)


  const token = Cookies.get('token')

  return (
    <div className='bg-gradient-to-r from-slate-500 to-slate-800'>
      {/* <CameraCard></CameraCard> */}

      <div >
        <Router>
          <Navbar email={loggedInUserEmail} userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn}></Navbar>
          <Routes>
            <Route
              exact
              path='/'
              element={<HomePage setLoggedInUserEmail={setLoggedInUserEmail} setUserIsLoggedIn={setUserIsLoggedIn}/>}
              
            />
            
            <Route
              exact
              path='/dashboard'
              element={<Dashboard />}
            />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
