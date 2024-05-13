import React from 'react'
import '../Style/contact.css'
export default function Contact() {
  return (
    <div className='page' id ='Contact'>
       <div className='contact'>
       <div className='title_name'>Contact </div>
       <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, et!</div>
       <div>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <textarea />
          <input type="submit" />

        </form>
       </div>

</div>
    </div>
  )
}
