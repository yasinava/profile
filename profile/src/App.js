import React from 'react';
import Navbar from './components/Navbar';
import {Route , Routes} from "react-router-dom"
import Home from './components/Home';
import Connect from './components/Connect';
import Projects from './components/Projects';
import AboutMeMore from './components/shared/AboutMeMore';
// https://www.youtube.com/watch?v=TEx_mRpIDkA
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='about' element={<AboutMeMore/>}/>
        <Route path='connect' element={<Connect />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;