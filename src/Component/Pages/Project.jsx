import React from 'react'
import '../Style/project.css'
import faceRecogniation from '../Images/attendence.webp'
import Aptos from '../Images/Aptos.jpeg'
import prometeo from '../Images/prometeo.jpg'
import tree from '../Images/iitj_tree.jpeg'
import { IoIosLink } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <div className='page' id='project'>
      <div className='Project_'>
        <div className='title_name'>Project </div>
        <div className='projects_computer '>
          <div className='project_divide'>
            <div className='image_project'>
              <img src={faceRecogniation} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Face Recognition(App)</h3>
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
            
              <div className='links_project'>
                <a href="">
              <IoIosLink size={25} />

                </a> | {''}
                <a href="">

              <FaVideo  size={25}/> 
                </a>| {''}
                <a href="https://github.com/a19hu/Proxyproof-Creal_-" target='_blank'>
              <FaGithub  size={25}/>

                </a>
              </div>



            </div>
          </div>
          <div className='project_divide'>
            
            <div className='project_detail'>
              <h3>Inter IIT</h3>
             
              – Implemented features including leave submission through PDF, a calendar displaying attendance records, and a unique
              functionality where the camera opens for attendance only upon request from the professor, remaining active for a limited
              time of 2 minutes.
              <div className='links_project'>
                <a href="">
              <IoIosLink size={25} />

                </a> | {''}
                <a href="">

              <FaVideo  size={25}/> 
                </a>| {''}
                <a href="">
              <FaGithub  size={25}/>

                </a>
              </div>

            </div>
            <div className='image_project reverse'>
              <img src={Aptos} alt="" />
            </div>
          </div>
          <div className='project_divide'>
          <div className='image_project '>
              <img src={tree} alt="" />
            </div>
            <div className='project_detail'>
              <h3>IITJ Family Tree</h3>
              
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
              
              <div className='links_project'>
                <a href="">
              <IoIosLink size={25} />

                </a> | {''}
                <a href="">

              <FaVideo  size={25}/> 
                </a>| {''}
                <a href="">
              <FaGithub  size={25}/>

                </a>
              </div>

            </div>
            
          </div>
          <div className='project_divide'>
            
            <div className='project_detail'>
              <h3>Prometeo</h3>
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
              <div className='links_project'>
                <a href="">
              <IoIosLink size={25} />

                </a> | {''}
                <a href="">

              <FaVideo  size={25}/> 
                </a>| {''}
                <a href="">
              <FaGithub  size={25}/>

                </a>
              </div>

            </div>
            <div className='image_project reverse'>
              <img src={prometeo} alt="" />
            </div>
          </div>
          {/* <hr /> */}
        </div>
        <div className='project_phone'>
          <div className='project_divide'>
            <div className='image_project'>
              <img src={faceRecogniation} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Face recognition</h3>
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
            
              <div className='links_project'>
                <a href="">
              <IoIosLink size={25} />

                </a> | {''}
                <a href="">

              <FaVideo  size={25}/> 
                </a>| {''}
                <a href="">
              <FaGithub  size={25}/>

                </a>
              </div>



            </div>
          </div>
          <div className='project_divide'>
          <div className='image_project reverse'>
              <img src={Aptos} alt="" />
            </div>
            <div className='project_detail'>
              <h3>inter iit</h3>
             
              – Implemented features including leave submission through PDF, a calendar displaying attendance records, and a unique
              functionality where the camera opens for attendance only upon request from the professor, remaining active for a limited
              time of 2 minutes.
            </div>
           
          </div>
          <div className='project_divide'>
          <div className='image_project '>
              <img src={tree} alt="" />
            </div>
            <div className='project_detail'>
              <h3>IITJ family tree</h3>
              
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
             
            </div>
            
          </div>
          <div className='project_divide'>
          <div className='image_project reverse'>
              <img src={prometeo} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Prometeo </h3>
              Developed ”Proxyproof” utilizing Firebase for backend and Flutter for frontend. The system implements attendance tracking
              based on facial recognition using the front camera for student identification and the back camera for capturing specific objects,
              such as a chair.
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
