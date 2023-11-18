import React from 'react'
import Heading from '../Commons/Heading'
import Footer from '../Commons/Footer';
import IMAGES from '../images';

function JobDescriptions() {
  return (
    <>
        <Heading />
        <section className='DescriptionsTop'>
            <div>
                <img className='DescriptionImages' src={IMAGES.amazon} alt="" />
                <h3>Senior Tax Manager</h3>
                <p>Corporate Tools $200K-$250K</p>
                <p>Post Falls, ID 83854 <span>In-Person</span></p>
                <ul className='FirstLists'>
                    <li>6d ago</li>
                    <li>Legal & Accounting</li>
                    <li>15+ years of experience</li>
                </ul>
                <input type="email" placeholder='Enter your email here' />
                <a href="/UploadResume"><button type="button" class="btn btn-primary btn-lg">Apply</button></a>
            </div>
            <div>
                <h3>Job Description</h3>
                <h6>Overview:</h6>
                <p>We’re looking for a Sr. Tax Manager or something. The title is a little hard to nail, but if the job you seek is meaningful, tough, and fulfilling work, we have the perfect role for you. We operate worldwide and in every state. It’s a lot of tax work and compliance. It’s a complicated structure and complicated problems. We seek someone who has started their career on the public accounting spectrum, and then moved into the corporate side and spent 10+ years being the actual person making the decisions about taxes and compliance.</p>
                <p>When we ask you to “tell us about some of your war stories”, you don’t have to think about it and you’re probably already smiling at how you were able to stand up to and outsmart some of those agencies out there. You don’t think of yourself as a desk jockey, but as a smart, savvy corporate tax partner. You want the ball at the end of the game and you’re getting to the goal line even though the other team might be “bigger”, because you are smarter than them.</p>
                <p>You’ll be the person here driving the decisions we make tax wise and ultimately a major part of those decisions. We’re not looking for a tax prep person to dump 1000 pages of returns onto a non-tax persons desk and ask for approval. You’ll be a very trusted partner in how we grow and run our corporate structure. We pay a LOT in taxes. We’re looking for someone to help us be as efficient as possible.</p>
                <p>This is a M-F, full-time salaried position that some hybrid work is possible. You’ll onboard and train in person, for at least the first 90 days, in Post Falls and continue working in our office with other fine-print loving finance people at least 2-3 days a week.</p>
                <h6>Wage:</h6>
                <p>Up to $250,000/year. We offer a good salary and good benefits. There is no profit sharing, shares, or bonus structure. Yearly merit reviews for raises are given with quarterly discussions leading up to that point.</p>
                <h6>Responsibilities:</h6>
                <ul>
                    <li>YOU make the decisions. YOU are the tax expert</li>
                    <li>Tax planning and execution through creative means to continue to help our business scale</li>
                    <li>Be nimble and quick on your feet when tax changes are coming. Plan for this.</li>
                    <li>Think past compliance to be more business minded and street smart when it comes to Corporate and Personal tax stance</li>
                    <li>Manage direct and indirect tax audit processes and communications for all jurisdictions as they arise</li>
                </ul>
                <h6>Requirements:</h6>
                <ul>
                    <li>Bachelor’s degree in accounting / CPA / CMA / or JD/LLM in Taxation</li>
                    <li>Minimum of 15 years of relevant, progressive, professional experience</li>
                    <li>Experience being the decision maker in regards to taxes relative to business decisions</li>
                    <li>Be a good human</li>
                </ul>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default JobDescriptions