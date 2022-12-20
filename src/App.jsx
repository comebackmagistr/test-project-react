import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Archive from './components/Archive/Archive';
import Mainpage from './components/Mainpage/Mainpage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
