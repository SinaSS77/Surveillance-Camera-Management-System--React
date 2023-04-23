import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import CameraCard from './components/card/Card';
import HomePage from './pages/Homepage';



function App() {
  return (
    <>
  <Navbar></Navbar>
  {/* <CameraCard></CameraCard> */}


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
          element={<CameraCard />}
        />
      </Routes>
    </Router>
  </>
  );
}

export default App;
