import React,{useState} from 'react'
import { HashLink } from 'react-router-hash-link';
import './Style/Navbar.css'
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function NavbarApp({ show }) {
   const [visible,setvisible]= useState(false)

  const onhandle=()=>{
setvisible(!visible)
  }
  return (
    <div className={`NavbarApp${visible ? ' add_background' : ' '}`}>
      <div className={'navbar_container'}>

        <div className={`navbarapp${show ? '' : '_hide'}`}>
           <div className='_links'>

          <HashLink to="#About">About</HashLink>
          <HashLink to="#project">Project</HashLink>
          {/* <HashLink to="#experiance">experiance</HashLink> */}


           </div>
        <HashLink className='_logo' > <span className='_A19hu'>
        A19HU {'  '}
          </span> STUDIO</HashLink>
        <HashLink to="#Contact" className='button'>Hit me up</HashLink>
        </div>
      </div>

      <div className='phone_navbar_container'>
      <div className={`navbarapp${show ? '' : ''}`}>
           <div className='_links_phone'>

         
          {visible
          ?

<RxCross2 color='white' size={30} onClick={onhandle}/>
          :
<FiAlignJustify  color='white' size={30} onClick={onhandle}/>

          }



           </div>
        <HashLink className='_logo' > <span className='_A19hu' >
        A19HU {'  '}
          </span> STUDIO</HashLink>
        <HashLink to="#Contact" className='button' >Hit me up</HashLink>
        </div>
      </div>
      {
        visible?
        <div className='phone-links'>
          <div>

        <HashLink to="#About" onClick={onhandle}>About</HashLink><br /> <hr />
                 <HashLink to="#project"onClick={onhandle}>Project</HashLink> <br /> <hr />
                 {/* <HashLink to="#experiance"onClick={onhandle}>experiance</HashLink> <br /> <hr /> */}
                 <HashLink to="#Contact"onClick={onhandle} className='Contact_phone'>Hit me up</HashLink>
                 
       
          </div>
             </div>
        :
  <div/>
      }
     
    </div>
  )
}
