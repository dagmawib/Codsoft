import React, { useState } from 'react'
import LetterD from '../images/letter-d.png';

function Heading() {
    const [navBar, setNavbar] = useState(false);

    const changeBackground = () =>{
        if (window.scrollY >= 76){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground)
  return (
    <>
        <nav className={navBar ? 'navbar navbar-expand-lg  scrolled' : 'navbar navbar-expand-lg bg-body-primary'}>
            <div class="container-fluid">
            <a class="navbar-brand" href="/"><img className='LogoLetter' src={LetterD} alt="" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto ms-auto">
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/searchJobs">Browse Jobs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/contactus">Contact</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/aboutus">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/login">Login</a>
                </li>
                <li class="nav-item">
                <a class="nav-link " aria-current="page" href="/employers"><button type="button" class="btn btn-success">Post a Job</button></a>
                </li>
            </ul>
            </div>
         </div>
        </nav>
    </>
  )
}

export default Heading;