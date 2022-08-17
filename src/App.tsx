import React from 'react';
import './App.css'

import Navbar from './Components/navbar';
import AboutMe from './Components/aboutme';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Education from './Components/education';
import Resume from './Components/resume';
import Experience from './Components/experience';
import ContactMe from './Components/contactme';
import WebsiteInfo from './Components/websiteinfo';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>

            <Routes>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/education' element={<Education/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/workexperience' element={<Experience/>}/>
                <Route path='/contactme' element={<ContactMe/>}/>
                <Route path='/aboutwebsite' element={<WebsiteInfo/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    
  );
}

export default App;
