import React from 'react'
import '../Style/footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='page'>
      <div className='footer'>
         <div className='item'>
            <div className='text_footer'>© 2024 A19HU STUDIOS</div>
            <div className='social_media'>
           <a href="https://github.com/a19hu" target='_blank'>
           <FaGithub color='white' size={30} />
            </a> 
           <a href="https://www.linkedin.com/in/ashutosh-kumar-5aa3b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>

            <FaLinkedin color='white' size={30} />
            </a> 

           <a href="https://www.instagram.com/im_ashutosh15?utm_source=qr&igsh=bDJuNHQ5d2RscGZv" target='_blank'>

            <FaInstagram color='white' size={30} />
            </a> 

            </div>
            <div className='text_footer'>
              <a className='text_footer' href="https://github.com/a19hu/Portfolio">

            code
              </a>
            </div>
         </div>
      </div>
    </div>
  )
}
