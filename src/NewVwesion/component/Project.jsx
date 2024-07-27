import React from 'react'
import faceRecogniation from '../../Component/Images/attendence.webp'
import tree from '../../Component/Images/iitj_tree.jpeg'
import Aptos from '../../Component/Images/Aptos.jpeg'
import facereco from '../../Component/Images/face_recognisation.png'
import prometeo from '../../Component/Images/prometeo.jpg'
import { IoIosLink } from "react-icons/io";
import { FaVideo,FaGithub} from "react-icons/fa";
export default function Project() {
  const projectlist =[
    {
     name:"Face Recognition(App)",
     discription:"Developed 'Proxyproof,' a facial recognition-based attendance system with Firebase backend, Flutter frontend, object detection, PDF leave submissions, an attendance calendar, and professor-controlled 2-minute camera activation.",
     imageurl:faceRecogniation,
     github:"",
     link:"",
     video:""
    },
    {
      name:"Inter IIT(Aptos)",
      discription:"Participated in Inter IIT 2023 at IIT Madras, developing a Spotify-like app using blockchain for the backend and React.js for the frontend.",
      imageurl:Aptos,
      github:"",
     link:"",
     video:""
    },
    {
      name:"IITJ Family Tree",
      discription:"Developed 'IITJ Family Tree' using Django with GraphQL, MySQL, and React.js to showcase IIT Jodhpur student profiles and the institution's cultural essence.",
      imageurl:tree,
      github:"",
     link:"",
     video:""
    },
    {
      name:"Prometeo",
      discription:"Designed and developed a dynamic website for Prometeo fest using React.js for the frontend and Django for the backend, ensuring seamless user navigation and engagement.",
      imageurl:prometeo,
      github:"",
     link:"",
     video:""
    },
    {
      name:"Face Recognition system on LFW Dataset",
      discription:"Engineered a robust face recognition model using CNN, LBP, and HOG on the LFW dataset, achieving 89% accuracy with SVM, LR, and Random Forest, and deployed it via Streamlit Cloud.",
      imageurl:facereco,
      github:"",
     link:"",
     video:""
    },
  ]
  console.log(projectlist)
  return (
    <div>
      <h1 className='heading'>Projects</h1>
      <div className='project_container'>
        {
          projectlist.map((data,index)=>{
           return(
          <div className='project_box' key={index}>
             <img src={data.imageurl} alt="" />
          <div><h3>{data.name}</h3>{data.discription}</div>
          <div> 
            <a href={data.link}> <IoIosLink size={25} /></a>
            <a href={data.video}> <FaVideo size={25} /></a>
            <a href={data.github}> <FaGithub size={25} /></a>
          </div>
        </div>
           )})
        }
      </div>
    </div>
  )
}
