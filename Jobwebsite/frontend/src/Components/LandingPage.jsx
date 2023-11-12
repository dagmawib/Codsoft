import React,{useState, useEffect} from "react";
import Heading from "./Commons/Heading";
import IMAGES from "./images";
import Footer from "./Commons/Footer";

function LandingPage() {
  const [data, setData] = useState();
    useEffect(() => {
      fetch("/api").then((res) => res.json())
                   .then((data) => setData(data.message))
    }, []);
  return (
    <>
        <Heading />
        {/* <p>{!data ? "Loading...":data}</p> */}
        <section className="FirstSec">
            <div  className="Headings">
            <h5>4500+ Jobs listed</h5>
            <h1>Find your Dream Job</h1>
            <p>We provide online instant cash loans with quick approval that suits your term length</p>
            <a href="/uploadresume"><button type="button" class="btn btn-success btn-lg">Upload Your Resume </button></a>
            </div>
            <img src={IMAGES.Jobsearch} alt="" />
        </section>
        {/* ////////////////////////////////////// */}
        <section className="beforeAnyone">
          <div className="First">
            <img src={IMAGES.world} alt="" />
            <div className="texts">
              <h2>Over 100K Jobs</h2>
              <p>There's no need to look anywhere else. With over 100K jobs, D-Jobs is the only site you'll ever need to find your next job.</p>
              <div className="buttons">
                <a href="searchJobs"><button type="button" class="btn btn-outline-success">Find Your Future Job</button></a>
              </div>
            </div>
          </div>
          <div className="Second">
            <img src={IMAGES.desktop} alt="" />
            <div className="texts">
              <h2>Sign Up to Get Job Alerts</h2>
              <p>Our powerful matching technology will send job matches right to your inbox.</p>
              <div className="buttons">
                <a href="/searchJobs"><button type="button" class="btn btn-outline-success">Find Your Future Job</button></a>
              </div>
            </div>
          </div>
        </section>
        {/* /////////////////////////////////////////////// */}
        <section className="SecondSec">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div className="dropdownItems">
            <div class="dropdown">
            <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Location
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/jobdetails">San Diego</a></li>
                <li><a class="dropdown-item" href="/jobdetails">New York</a></li>
                <li><a class="dropdown-item" href="/jobdetails">Dallas</a></li>
            </ul>
            </div>
            <div class="dropdown">
            <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/jobdetails">Tech</a></li>
                <li><a class="dropdown-item" href="/jobdetails">Medicine</a></li>
                <li><a class="dropdown-item" href="/jobdetails">Law</a></li>
            </ul>
            </div>
        </div>
        </section>
        {/* //////////////////////////////////////// */}
        
        <section className="ThirdSec">
        <div className='container3'>
          <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Website & Software</h5>
                <img className="icons" src={IMAGES.appDevelopment} alt="" />
                <p>143 Open position</p>
                <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
          <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Education & Training</h5>
                <img className="icons" src={IMAGES.scholarship} alt="" />
                <p>140 Open position</p>
                <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
        
        <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Graphic Design</h5>
                <img className="icons" src={IMAGES.graphicDesign} alt="" />
                <p>135 Open position</p>
               <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
          <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Accounting & Finance</h5>
                <img className="icons" src={IMAGES.budget} alt="" />
                <p>150 Open position</p>
                <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
          <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Restaurant & Food</h5>
                <img className="icons" src={IMAGES.cutlery} alt="" />
               <p>124 Open position</p>
               <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
          <div className='card3'>
            <div className='box3'>
              <div className='content3'>
                <h5>Health & Hospital</h5>
                <img className="icons" src={IMAGES.hospital} alt="" />
                <p>113 Open position</p>
                <a href="/jobdetails"><button type="button" class="btn btn-outline-info GotoButton">Go To Page</button></a>
              </div>
            </div>
          </div>
        </div>
        </section>
        {/* //////////////////////////////////////////////////////// */}
          <section className="fourthSec">
            <div className="theThreeTexts">
            <div className="TheFirstOne">
              <h1>50,000+ Companies</h1>
              <h5>Throughout the United States, <br />
              Asia and Africa</h5>
            </div>
            <div className="TheSecondOne">
              <h1>361,655+ minutes</h1>
              <h5>Time saved by Apply4Me <br />
                users in the past month</h5>
            </div>
            <div className="TheThirdOne">
              <h1>25,000+ Jobs</h1>
              <h5>Quality $10K+ openings in <br />
                your search results</h5>
            </div>
            </div>
            <a href="/login"><button type="button" class="btn btn-primary btn-lg">Join Now</button></a>
          </section>
          {/* ////////////////////////////////////////// */}
          <section className="fifthSec">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <p className="d-block w-100">" I was able to get a great full time position even before finishing my last semester of college.I couldn't have asked for a better entry level position and I love my job. Thank you D-Jobs! "</p>
                  <h4>Jhon Gordon</h4>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <p className="d-block w-100">" D-Jobs made the search way faster and easier and told me when companies would view my applications. Eventually I got a call for the position I wanted with a great company close to where I live "</p>
                  <h4>Smith Row</h4>
                </div>
                <div class="carousel-item">
                  <p className="d-block w-100">" D-Jobs got me my first real jobs after I graduated from college. Thanks to them, I am now able to be in this world as a functional, working adult. Hooray for salary! No more clocking in! "</p>
                  <h4>David William</h4>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon nextArrows" aria-hidden="false"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon nextArrows" aria-hidden="false"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        <Footer />
    </>
  )
}

export default LandingPage