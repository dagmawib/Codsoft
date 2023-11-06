import React from 'react'
import Heading from '../Commons/Heading'
import Footer from '../Commons/Footer'
import IMAGES from '../images'

function JobPost() {
  return (
    <>
    <Heading/>
    <section className='employersPage'>
      <div className='heading'>
        <div className='headingimg'>
          <img src={IMAGES.hiring} alt="" />
        </div>
      <div className='headingTexts'>
        <h1><span>Hiring</span> made easy.</h1>
        <h5>Modern ways for growing teams.</h5>
        <img src={IMAGES.loudspeaker} alt="" />
        <h5>Start your hiring journey now!</h5>
      </div>
      </div>
      <div className='jobPost'>
        <h2>Job Information</h2>
        <form action="">
          <div className='inputBox'>
            <span>Job Title</span>
            <input type="text" name="" id="" required />
          </div>
          <div className='inputBox'>
            <span>Job Description</span>
            <textarea  cols="80" rows="10" required></textarea>
          </div>
          <div className='inputBox'>
            <span>Job Location</span>
            <input type="text" name="" id="" required />
          </div>
          <div className='dropdownLists'>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Job Type</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Full time</a></li>
              <li><a class="dropdown-item">Part time</a></li>
              <li><a class="dropdown-item">Remote</a></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Category</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item">Programing</a></li>
              <li><a class="dropdown-item">Marketing</a></li>
              <li><a class="dropdown-item">HealthCare</a></li>
            </ul>
          </div>
          </div>
        </form>
        <button type='button' className='btn btn-primary postJob'>Post the job</button>
      </div>
    </section>
      <Footer/>
    </>
  )
}

export default JobPost