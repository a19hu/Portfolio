import React from 'react'
import profile from '../../Component/Images/Ashutosh.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className='info_name_img'>
                <img src={profile} alt="" />
                <div className="name">Ashutosh kumar</div>
                <Typewriter
                    options={{
                        strings: ['Full stack devloper','Web devloper', 'App devloper',],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div>
                <div className='social_media'>
                    <a href="https://github.com/a19hu" target='_blank'><FaGithub color='white' size={30} /></a>
                    <a href="https://www.linkedin.com/in/ashutosh-kumar-5aa3b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <FaLinkedin color='white' size={30} /></a>
                    <a href="https://www.instagram.com/im_ashutosh15?utm_source=qr&igsh=bDJuNHQ5d2RscGZv" target='_blank'><FaInstagram color='white' size={30} /></a>
                </div>
                <a href="https://drive.google.com/file/d/1Qqrm4eWzxHTP_YiColV-hFBWa3ks59IJ/view?usp=sharing" target='_blank' className='resume'><button className='submit_button'>View CV</button></a>
            </div>
        </div>
    )
}
