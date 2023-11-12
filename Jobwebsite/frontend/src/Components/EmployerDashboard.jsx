import React from 'react'
import Heading from './Commons/Heading';
import Footer from './Commons/Footer'
import IMAGES from './images'

function EmployerDashboard() {
  return (
    <>
    <Heading/>
      <section className='EmployersPage'>
        <div className='firstDiv'>
          <div className='Texts'>
            <h1>Track applicants and <br />manage your jobs</h1>
            <p>Track your overall hiring progress, connect with candidates,<br /> and manage jobs—all from Indeed Connect.</p>
            <a href="/jobpost"><button type="button" class="btn btn-primary">Get started</button></a>
          </div>
          <img src={IMAGES.employer1} alt="" />
        </div>
        <div className='SameBack'>
        <div className='onlyline'>
        <h3>Indeed lets you narrow down applicants, connect with candidates, schedule interviews, and track overall progress towards hiring from one place.</h3>
        </div>
        <div className='secondDiv'>
          <div className='Texts'>
            <h3>Keep your hiring on track</h3>
            <p>From posting jobs to scheduling interviews, Indeed provides all the tools you need to manage hiring across all roles and locations. Use Indeed Connect to update job posts, set budgets, connect with candidates, and more.</p>
          </div>
          <img src={IMAGES.employer2} alt="" />
        </div>
        </div>
        <div className='thirdDiv'>
          <div className='Texts'>
            <h3>Connect with candidates</h3>
            <p>Indeed Connect provides all the tools you need to find the right people. View candidates whose experiences and qualifications match your job posts, screen applicants, and schedule interviews. Indeed Connect also automatically updates candidate status based on your actions.</p>
          </div>
          <img src={IMAGES.employer3} alt="" />
        </div>
        <div className='fourthDiv'>
          <div className='Texts'>
            <h3>Manage jobs across roles and locations</h3>
            <p>Whether you’re hiring for two roles or a hundred, Indeed Connect lets you quickly post jobs to multiple locations, search across and filter jobs, sponsor jobs, bulk edit job posts, and view hiring and performance metrics.</p>
            <p>Ready to hire? <a href="/jobpost">Get started.</a></p>
          </div>
          <img src={IMAGES.employer4} alt="" />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default EmployerDashboard