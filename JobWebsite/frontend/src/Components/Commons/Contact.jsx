import React from 'react'
import Heading from './Heading'
import Footer from './Footer'
import IMAGES from '../images'

function Contact() {
  return (
    <>
    <Heading />
    <section className='ContactSection'>
        <div className='ContactContainer'>
            <div className='contactInfo'>
                <h2>Contact Info</h2>
                <ul className='info'>
                    <li>
                        <span><img src={IMAGES.map} alt="" /></span>
                        <span>Haramaya University <br />
                        Dire Dawa Ethiopia</span>
                    </li>
                    <li>
                        <span><img src={IMAGES.mail} alt="" /></span>
                        <span>dagibelay1430@gmail.com</span>
                    </li>
                    <li>
                        <span><img src={IMAGES.phone} alt="" /></span>
                        <span>+251906153137</span>
                    </li>
                </ul>
            </div>
        
        <div className='contactForm'>
            <h2>Send a Message</h2>
            <div className='formBox'>
                <div className='inputBox w50'>
                    <span>First Name</span>
                    <input type="text" name='' required />
                </div>
                <div className='inputBox w50'>
                    <span>Last Name</span>
                    <input type="text" name='' required />
                </div>
                <div className='inputBox w50'>
                    <span>Email Address</span>
                    <input type="email" name='' required />
                </div>
                <div className='inputBox w50'>
                    <span>Phone Number</span>
                    <input type="text" name='' required />
                </div>
                <div className='inputBox w100'>
                    <span>Write your message here...</span>
                    <textarea type="text" name='' required />
                </div>
                <div className='inputBox w100'>
                    <input type="submit" value={"Send"} />
                </div>
            </div>
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact