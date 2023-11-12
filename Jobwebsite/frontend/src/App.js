import React, { useEffect, useState } from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import JobListing from "./Components/Jobs/JobListing";
import AboutUs from "./Components/Commons/AboutUs";
import Contact from "./Components/Commons/Contact";
import Login from "./Components/LoginSignUp/Login";
import Signup from "./Components/LoginSignUp/Signup";
import JobDetail from "./Components/Jobs/JobDetail";
import JobDescriptions from "./Components/Jobs/JobDescriptions";
import UploadResume from "./Components/UploadResume";
import EmployerDashboard from "./Components/EmployerDashboard";
import JobPost from "./Components/Jobs/JobPost";
import axios from "axios";

function App() {
  const [user,setUser]= useState(null);
  const getUser = async() =>{
    try{
      const url = `${process.env.REACT_APP_API_URL}/auth/login`
      const{ data } = await axios.get(url,{withCredentials:true});
      setUser(data.user._json);
    }catch(err){
      console.log(err)
    }
  } 
  useEffect(()=>{
    getUser();
  },[]);
  return (
    <div className="App">
      {/* user ? user={user} :<Navigate to="/login"/> */}
      <Routes>
        <Route path="/" element={ <LandingPage />}/>
        <Route path="/searchJobs" element={ <JobListing />}/>
        <Route path="/aboutus" element={<AboutUs/> }/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/login" element={user ? <Navigate to={JobListing}/> : <Login/>}/>
        <Route path="/signup" element={user ? <Navigate to="/searchJobs"/> : <Signup/>}/>
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
