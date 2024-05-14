import React from 'react'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className='Home_page' id='Home'>
        <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div>
      <div className='items'>

      <h1 className='title'>Web Developer</h1>
      <a href="" target='_blank'>
      <div className='resume'> <BsFillFileEarmarkPdfFill color='rgb(14, 128, 227)' size={30} />View Resume</div>
        </a>
      </div>
    </div>
  )
}
