import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './Style/Navbar.css'
export default function NavbarApp({ show }) {
  return (
    <div className='NavbarApp' >
      <div className={'navbar_container'}>

        <div className={`navbarapp${show ? '' : '_hide'}`}>
           <div className='_links'>

          <HashLink to="#About">About</HashLink>
          <HashLink to="#project">Work</HashLink>
          <HashLink to="#Contact">Contact</HashLink>
          <HashLink to="#experiance">experiance</HashLink>


           </div>
        <HashLink className='_logo' > <span className='_A19hu'>
        A19HU {'  '}
          </span> STUDIO</HashLink>
        <HashLink className='button'>Hit me up</HashLink>
        </div>
      </div>
    </div>
  )
}
