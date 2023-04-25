import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import CameraCard from './components/cards/VideoCard';
import HomePage from './pages/Homepage';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <CameraCard></CameraCard> */}

      <div className=' mt-[150px] mr-[100px]'>
        <Router>
          <Routes>
            <Route
              exact
              path='/'
              element={<HomePage />}
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
