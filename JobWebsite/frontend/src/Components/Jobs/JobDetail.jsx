import React from 'react'
import Heading from '../Commons/Heading'
import Footer from '../Commons/Footer'
import IMAGES from '../images'
function JobDetail() {
  return (
    <>
    <Heading/>
      <section className='DetailsSecOne'>
        <div className='allLists'>
          <div className='DetailsDivOne' id='accounting' name='accounting'>
          <img src={IMAGES.budget} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo' >
            <h2>Senior Tax Manager</h2>
            <h3>Corporate Tools. $200K-$250K</h3>
            <h6>New York, NY In-Person</h6>
            <p>Manage direct and indirect tax audit processes and communications for all jurisdictions as they arise; manage and coordinate annual tax return preparation and review...</p>
            <ul>
              <li>4d ago</li>
              <li>15+ years exp</li>
              <li>Legal & Accounting</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='marketing' name='marketing'>
          <img src={IMAGES.bullhorn} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Email Marketing Specialist</h2>
            <h3>Pinnacie Minds $80K-$100K</h3>
            <h6>US-Anywhere Remote</h6>
            <p>Create the overall layout and design elements of our marketing efforts in order to create engaging and  visually interesting email content. Assisting with project pursuits, aiding contract negotiations an...</p>
            <ul>
              <li>2d ago</li>
              <li>5-7 years exp</li>
              <li>Finance & Insurance</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='operation'>
          <img src={IMAGES.operation} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Manager, Operation</h2>
            <h3>Northwell Health $86K - $130K *</h3>
            <h6>Chicago, IL  <em>In-Person</em></h6>
            <p>The Manager, Operations will oversee the daily operations of a Plastic Surgery practice, ensuring efficient patient care, financial management, and staff coordination...</p>
            
            <ul>
              <li>2d ago</li>
              <li>5-7 years exp</li>
              <li>Healthcare</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='project'>
          <img src={IMAGES.projectmanagemnt} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Project Manager/Coordinating Center-Research Institute</h2>
            <h3>Sutter Health $124K - $186K *</h3>
            <h6>San Francisco, CA (San Francisco Coutry)<em>In-Person</em></h6>
            <p>The Project Manager/Coordinating Center-Research Institute is responsible for managing population-based and clinical research projects, including implementation, protocol development, team management...</p>
            
            <ul>
              <li>5d ago</li>
              <li>8-10 years exp</li>
              <li>Healthcare</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='sales'>
          <img src={IMAGES.cooperation} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Business Developer</h2>
            <h3>Baker Concrete Construction $100K - $150K *</h3>
            <h6>Dallas, TX <em>In-Person</em></h6>
            <p>The Business Developer performs business development activities including a focus on relationship development, project lead generation, assisting with project pursuits, aiding contract negotiations an...</p>
            
            <ul>
              <li>1W ago</li>
              <li>Less than 5 years exp</li>
              <li>Real Estate & Construction</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='science'>
          <img src={IMAGES.datascience} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Global Data Science-Specialist of Data Science</h2>
            <h3>Merck & co, inc $97K-$153K</h3>
            <h6>Rahway, NJ (Union County) <em>In-Person</em></h6>
            <p>The Global Data Science Specialist is responsible for writing, integrating, and deploying code into production. They will work with cross-functional teams to scale products and deliver  on project goal...</p>
            
            <ul>
              <li>Yesterday</li>
              <li>Less than 5 years exp</li>
              <li>Pharmaceuticals & Biotech</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='technology' name='technology'>
          <img src={IMAGES.robotic} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Director of Technology</h2>
            <h3>Tyler Technologies $130K - $162K *</h3>
            <h6>Little Rock, AR (Pulaski Coutry) <em>In-Person</em></h6>
            <p>The Director of Technology will be responsible for managing a team of developers and overseeing technology solutions for government partners. They will also be  responsible for setting strategic techno...</p>
            
            <ul>
              <li>6d ago</li>
              <li>8-10 years exp</li>
              <li>Consumer Technology</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='engineering'>
          <img src={IMAGES.engineers} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Construction Engineer</h2>
            <h3>AECOM $95K - $140K *</h3>
            <h6>San Diego, CA (San Diego Coutry) <em>In-Person</em></h6>
            <p>The Construction Engineer will be responsible for coordinating the engineering design and construction teams, ensuring quality assurance of the construction, and facilitating communication between var...</p>
           
            <ul>
              <li>5d ago</li>
              <li>8-10 years exp</li>
              <li>Real Estate & Construction</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='heealthcare'>
          <img src={IMAGES.healthcare} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Healthcare Consultant</h2>
            <h3>Avaya$137K - $185K *</h3>
            <h6>Irving, TX (Dallas County)<em>In-Person</em></h6>
            <p>Healthcare Consultant at Avaya, responsible for prospecting, closing, and managing activities on healthcare accounts. Requires 5-10 years of consulting and account management experience, strong negoti...</p>
            
            <ul>
              <li>6d ago</li>
              <li>5-7 years exp</li>
              <li>Telecommunication & Hardware</li>
            </ul>
          </a>
          </div>
          <div className='DetailsDivOne' id='human'>
          <img src={IMAGES.resource} alt="" />
          <a href="/jobdescriptions" className='DetailsDivTwo'>
            <h2>Director of Human Resource</h2>
            <h3>LGC Hospitality $130K - $140K *</h3>
            <h6>Washington, DC (District Of Columbia County) <em>In-Person</em></h6>
            <p>Efficiently manage all aspects of the Human Resources function, including recruitment, hiring, benefits, training, employee relations, labor relations, engagement, health, safety, and compliance with...</p>
            
            <ul>
              <li>6d ago</li>
              <li>8-10 years exp</li>
              <li>Consumer Technology</li>
            </ul>
          </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default JobDetail