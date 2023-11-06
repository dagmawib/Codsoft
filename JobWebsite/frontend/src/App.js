import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import JobListing from "./Components/Jobs/JobListing";
import AboutUs from "./Components/Commons/AboutUs";
import Contact from "./Components/Commons/Contact";
import LoginSignup from "./Components/LoginSignup";
import JobDetail from "./Components/Jobs/JobDetail";
import JobDescriptions from "./Components/Jobs/JobDescriptions";
import UploadResume from "./Components/UploadResume";
import EmployerDashboard from "./Components/EmployerDashboard";
import JobPost from "./Components/Jobs/JobPost";


function App() {
  

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/search-jobs" element={<JobListing/>}/>
        <Route path="/aboutus" element={<AboutUs/> }/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/jobdetails" element={<JobDetail/>}/>
        <Route path="/jobdescriptions" element={<JobDescriptions/>}/>
        <Route path="/uploadresume" element={<UploadResume/>}/>
        <Route path="/employers" element={<EmployerDashboard/>}/>
        <Route path="/jobpost" element={<JobPost/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
