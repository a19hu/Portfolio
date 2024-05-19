import React from 'react'
import '../Style/project.css'
import faceRecogniation from '../Images/attendence.webp'
import Aptos from '../Images/Aptos.jpeg'
import facereco from '../Images/face_recognisation.png'
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
              Developed "Proxyproof," a facial recognition-based attendance system with Firebase backend, Flutter frontend, object detection, PDF leave submissions, an attendance calendar, and professor-controlled 2-minute camera activation.

              <div className='links_project'>
                <a href="https://drive.google.com/file/d/15gbXBYPlb4c4B8qN_WQiadFdSUTTnzQp/view">
                  <IoIosLink size={25} />

                </a> | {''}
                <a href="https://youtu.be/KlKf7AiV8WU?si=YHuIkWdW3WdXJU04" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/Proxyproof-Creal_-" target='_blank'>
                  <FaGithub size={25} />

                </a>
              </div>



            </div>
          </div>
          <div className='project_divide'>

            <div className='project_detail'>
              <h3>Inter IIT(Aptos)</h3>

              Participated in Inter IIT 2023 at IIT Madras, developing a Spotify-like app using blockchain for the backend and React.js for the frontend.
              <div className='links_project'>

                <a href="https://drive.google.com/file/d/1H1MAqh3bEju-_b0A9G0cdCyGYPASslOW/view?usp=drivesdk" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/inter-iit-blockchain" target='_blank'>
                  <FaGithub size={25} />

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

              Developed "IITJ Family Tree" using Django with GraphQL, MySQL, and React.js to showcase IIT Jodhpur student profiles and the institution's cultural essence.

              <div className='links_project'>
                <a href="">
                  <IoIosLink size={25} />

                </a> | {''}
                <a href="https://www.youtube.com/watch?v=S_I1EbO9FdE" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/iitj_family_tree" target='_blank'>
                  <FaGithub size={25} />

                </a>
              </div>

            </div>

          </div>
          <div className='project_divide'>

            <div className='project_detail'>
              <h3>Prometeo</h3>
              Designed and developed a dynamic website for Prometeo fest using React.js for the frontend and Django for the backend, ensuring seamless user navigation and engagement.
              <div className='links_project'>
                <a href="https://my.prometeo.in/register" target='_blank'>
                  <IoIosLink size={25} />

                </a> | {''}

                <a href="https://github.com/a19hu/my-prometeo-24" target='_blank'>
                  <FaGithub size={25} color='white' />

                </a>
              </div>

            </div>
            <div className='image_project reverse'>
              <img src={prometeo} alt="" />
            </div>
          </div>
          <div className='project_divide'>
          <div className='image_project'>
              <img src={facereco} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Face Recognition system on LFW Dataset </h3>
              Engineered a robust face recognition model using CNN, LBP, and HOG on the LFW dataset, achieving 89% accuracy with SVM, LR, and Random Forest, and deployed it via Streamlit Cloud.
              <div className='links_project'>
                <a href="https://prml-web-pages.vercel.app/" target='_blank'>
                  <IoIosLink size={25} />

                </a> | {''}

                <a href="https://github.com/a19hu/Face_recognition/" target='_blank'>
                  <FaGithub size={25} color='white' />

                </a>
              </div>

            </div>
            
          </div>
        </div>
        <div className='project_phone'>
        <div className='project_divide'>
            <div className='image_project'>
              <img src={faceRecogniation} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Face Recognition(App)</h3>
              Developed "Proxyproof," a facial recognition-based attendance system with Firebase backend, Flutter frontend, object detection, PDF leave submissions, an attendance calendar, and professor-controlled 2-minute camera activation.

              <div className='links_project'>
                <a href="https://drive.google.com/file/d/15gbXBYPlb4c4B8qN_WQiadFdSUTTnzQp/view">
                  <IoIosLink size={25} />

                </a> | {''}
                <a href="https://youtu.be/KlKf7AiV8WU?si=YHuIkWdW3WdXJU04" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/Proxyproof-Creal_-" target='_blank'>
                  <FaGithub size={25} />

                </a>
              </div>



            </div>
          </div>
          <div className='project_divide'>
          <div className='image_project reverse'>
              <img src={Aptos} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Inter IIT(Aptos)</h3>

              Participated in Inter IIT 2023 at IIT Madras, developing a Spotify-like app using blockchain for the backend and React.js for the frontend.
              <div className='links_project'>

                <a href="https://drive.google.com/file/d/1H1MAqh3bEju-_b0A9G0cdCyGYPASslOW/view?usp=drivesdk" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/inter-iit-blockchain" target='_blank'>
                  <FaGithub size={25} />

                </a>
              </div>

            </div>
            
          </div>
          <div className='project_divide'>
            <div className='image_project '>
              <img src={tree} alt="" />
            </div>
            <div className='project_detail'>
              <h3>IITJ Family Tree</h3>

              Developed "IITJ Family Tree" using Django with GraphQL, MySQL, and React.js to showcase IIT Jodhpur student profiles and the institution's cultural essence.

              <div className='links_project'>
                <a href="">
                  <IoIosLink size={25} />

                </a> | {''}
                <a href="https://www.youtube.com/watch?v=S_I1EbO9FdE" target='_blank'>

                  <FaVideo size={25} />
                </a>| {''}
                <a href="https://github.com/a19hu/iitj_family_tree" target='_blank'>
                  <FaGithub size={25} />

                </a>
              </div>

            </div>

          </div>
          <div className='project_divide'>
          <div className='image_project reverse'>
              <img src={prometeo} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Prometeo</h3>
              Designed and developed a dynamic website for Prometeo fest using React.js for the frontend and Django for the backend, ensuring seamless user navigation and engagement.
              <div className='links_project'>
                <a href="https://my.prometeo.in/register" target='_blank'>
                  <IoIosLink size={25} />

                </a> | {''}

                <a href="https://github.com/a19hu/my-prometeo-24" target='_blank'>
                  <FaGithub size={25} color='white' />

                </a>
              </div>

            </div>
            
          </div>
          <div className='project_divide'>
          <div className='image_project'>
              <img src={facereco} alt="" />
            </div>
            <div className='project_detail'>
              <h3>Face Recognition system on LFW Dataset </h3>
              Engineered a robust face recognition model using CNN, LBP, and HOG on the LFW dataset, achieving 89% accuracy with SVM, LR, and Random Forest, and deployed it via Streamlit Cloud.
              <div className='links_project'>
                <a href="https://prml-web-pages.vercel.app/" target='_blank'>
                  <IoIosLink size={25} />

                </a> | {''}

                <a href="https://github.com/a19hu/Face_recognition/" target='_blank'>
                  <FaGithub size={25} color='white' />

                </a>
              </div>

            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
