import React from 'react'
import profile from '../Images/profile.jpeg'
import '../Style/About.css'
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
                <div>
                  I am Ashutosh , a developer .
                  B.Tech. in Computer science and  Engineering
                  Indian Institute of Technology, Jodhpur.
                </div>
              </div>
            </div>
          </div>
        <div className='divider'/>
        </div>
      </div>
    </>
  )
}
