import React from 'react'
// import profile from '../Images/profile.jpeg'
import profile from '../Images/backrem_profile.png'
import '../Style/About.css'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className='page' id='About'>
        <div className='About_'>
          <div className='About_column'>
            <div className='profile_image'>
              <img src={profile} alt="" />
            </div>
            <div className='title_about'>
              <div>
                <div className='title_name'>About</div>
                <div className='about_me'>
                Hi, I'm Ashutosh Kumar, an engineering student at IIT Jodhpur. I experiment with various tech stacks and have developed proficiency in several. My expertise is in web development, where I excel in both front-end and back-end development and also devops. Driven by a passion for learning and innovation, I'm eager to bring my skills to new and challenging projects.
                </div>
                <a href="https://drive.google.com/file/d/15guyrUa0wgg0ZwNpdPin9Uxz49mDhhPC/view?usp=drivesdk" target='_blank' className='resume'>
     <BsFillFileEarmarkPdfFill color='rgb(14, 128, 227)' size={20} />View Resume
        </a>
              </div>
            </div>
          </div>
        {/* <div className='divider'/> */}
        </div>
      </div>
    </>
  )
}
