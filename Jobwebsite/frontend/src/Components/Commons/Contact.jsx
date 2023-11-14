import React,{ useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Heading from './Heading'
import Footer from './Footer'
import IMAGES from '../images'

function Contact() {
    const initialFormState = {
        user_name: '',
        user_email: '',
        message: ''
      };
    
      const [formData, setFormData] = useState(initialFormState);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_c2srrug', 
                     'template_zyh8pg8', 
                      form.current, 'PwIUvH6qPZ9rTj5KO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormData(initialFormState);
    };
    
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
            <form ref={form} onSubmit={sendEmail}>
            <div className='formBox'>
                <div className='inputBox w50'>
                    <span>Full Name</span>
                    <input type="text" 
                           name="user_name" 
                           required 
                           value={formData.user_name}
                           onChange={handleChange}
                        />
                </div>
               
                <div className='inputBox w50'>
                    <span>Email Address</span>
                    <input type="email" 
                           name="user_email"  
                           required 
                           value={formData.user_email}
                           onChange={handleChange}
                        />
                </div>
                
                <div className='inputBox w100'>
                    <span>Write your message here...</span>
                    <textarea type="text"  
                              name="message" 
                              required 
                              value={formData.message}
                              onChange={handleChange}
                            />
                </div>
                <div className='inputBox w100'>
                    <input type="submit" value="Send" />
                </div>
            </div>
          </form>
        </div>
    </div>
    </section>
    <Footer/>
    </>
  )
}

export default Contact