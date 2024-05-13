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
           <a href="https://github.com/a19hu" target='_blank'>

            <FaLinkedin color='white' size={30} />
            </a> 

           <a href="https://github.com/a19hu" target='_blank'>

            <FaInstagram color='white' size={30} />
            </a> 

            </div>
            <div className='text_footer'>
            IMPRINT
            </div>
         </div>
      </div>
    </div>
  )
}
