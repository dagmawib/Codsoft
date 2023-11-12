import React from 'react'

function Footer() {
  return (
    <>
      <footer className='Footers'>
          <ul class="wrraper">
          <li class="icon linkedin">
              <span class="tooltip">LinkedIn</span>
              <span><a href=""><i class="fa-brands fa-linkedin"></i></a></span>
          </li>
          <li class="icon twitter">
              <span class="tooltip">Twitter</span>
              <span><a href=""><i class="fab fa-twitter"></i></a></span>
          </li>
          <li class="icon telegram">
              <span class="tooltip">Telegram</span>
              <span><a href=""><i class="fa-brands fa-telegram"></i></a></span>
          </li>
          <li class="icon github">
              <span class="tooltip">Github</span>
              <span><a href=""><i class="fa-brands fa-github"></i></a></span>
          </li>
         
        </ul>
           <p>Copyright ©2023</p> 
           
      </footer>
    </>
  )
}

export default Footer