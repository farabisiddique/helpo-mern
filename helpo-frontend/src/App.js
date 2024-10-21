import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import './App.css';
import Navbar from './components/NavBar';

const App = () => {
  // const [todos, setTodos] = useState([]);
  const appEntryURL = process.env.REACT_APP_API_BASE_URL;;

  useEffect(() => {
    // Fetch data from the Express server
    axios.get(appEntryURL+'/')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};
export default App;
