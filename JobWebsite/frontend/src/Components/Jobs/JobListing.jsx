import React from 'react'
import Header from '../Commons/Heading';
import Footer from '../Commons/Footer';
import IMAGES from '../images';


function JobListing() {
  return (
    <>
        <Header/>
        <section className='joblisting-1stsec'>
            <div className='texts'>
            <h1>Job Search</h1>
            <h6>Top quality job openings near you, with the highest pay and best compensation.</h6>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Job Title,Company or Industry" aria-label="Job Title,Company or Industry" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </section>
        <section className='joblisting-2ndsec'>
        
                <h2>Browse Jobs by Role</h2>
            <div className='fiveitemsListOne'>
                <a href="/jobdetails#accounting">
                <div className='items'>
                    <h4>Accounting & Finance</h4>
                    <img className="icons" src={IMAGES.budget} alt="" />
                </div>
                </a>
                <a href="/jobdetails#engineering">
                <div className='items'>
                    <h4>Engineering & Construction</h4>
                    <img className="icons" src={IMAGES.engineers} alt="" />
                </div>
                </a>
                <a href="/jobdetails#heealthcare">
                <div className='items'>
                    <h4>Healthcare</h4>
                    <img className="icons" src={IMAGES.healthcare} alt="" />
                </div>
                </a>
                <a href="/jobdetails#human">
                <div className='items'>
                    <h4>Human Resourse & Legal</h4>
                    <img className="icons" src={IMAGES.resource} alt="" />
                </div>
                </a>
                <a href="/jobdetails#marketing">
                <div className='items'>
                    <h4>Marketing , Media and Design</h4>
                    <img className="icons" src={IMAGES.bullhorn} alt="" />
                </div>
                </a>
             </div>
             <div className='fiveitemsListTwo'>
                <a href="/jobdetails#operation">
                <div className='items'>
                    <h4>Operation & General Managment </h4>
                    <img className="icons" src={IMAGES.operation} alt="" />
                </div>
                </a>
                <a href="/jobdetails#project">
                <div className='items'>
                    <h4>Project & Program Managman</h4>
                    <img className="icons" src={IMAGES.projectmanagemnt} alt="" />
                </div>
                </a>
                <a href="/jobdetails#sales">
                <div className='items'>
                    <h4>Sales & Business Development</h4>
                    <img className="icons" src={IMAGES.cooperation} alt="" />
                </div>
                </a>
                <a href="/jobdetails#science">
                <div className='items'>
                    <h4>Science & Education</h4>
                    <img className="icons" src={IMAGES.datascience} alt="" />
                </div>
                </a>
                <a href="/jobdetails#technology">
                <div className='items'>
                    <h4>Technology</h4>
                    <img className="icons" src={IMAGES.robotic} alt="" />
                </div>
                </a>
            </div>
        </section>
        <section className='joblisting-3rdsec'>
            <div className='container'>
                <div className='card'>
                    <div className='box'>
                        <div className='content'>
                            <h3>Job by Location</h3>
                            <a href="/jobdetails"> <img src={IMAGES.snaDiego} alt="" /><span>San Diego, CA</span></a>
                            <a href="/jobdetails"><img src={IMAGES.newyork} alt="" /><span>New York</span></a>
                            <a href="/jobdetails"><img src={IMAGES.dallas} alt="" /><span>Dallas, TX</span></a>
                            <a href="/jobdetails"><img src={IMAGES.chicago} alt="" /><span>Chicago, IL</span></a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='box'>
                        <div className='content'>
                            <h3>Job by Company</h3>
                            <a href="/jobdetails"><img  src={IMAGES.amazon} alt="" /><span>Amazon</span></a>
                            <a href="/jobdetails"><img  src={IMAGES.dell} alt="" /><span>Dell</span></a> 
                            <a href="/jobdetails"><img  src={IMAGES.facebook} alt="" /><span>Facebook</span></a>
                            <a href="/jobdetails"><img  src={IMAGES.microsoft} alt="" /><span>Microsoft</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default JobListing