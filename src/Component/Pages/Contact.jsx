import React, { useState } from 'react'
import '../Style/contact.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

// toast.configure();
export default function Contact() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setmessage] = useState('')

  const templateparam = {
    from_name: name,
    from_email: email,
    to_name: 'Ashutosh',
    message: message

  }
  const notify = async (e) => {
    e.preventDefault();
    if(!name && !email && !message){
      return toast.warn('please fill all information',
        {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          progress: undefined,
          hideProgressBar: false,
          pauseOnHover: true,
        }
      )
    }
    emailjs
      .send('service_v0vq6we', 'template_ogkyaet', templateparam,
        'uolYM2PtCW9G1rxek',
      )
      .then(
        () => {
          toast.success("Successfully email send",
          {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
            hideProgressBar: false,
            pauseOnHover: true,
          }
          );
          setname('')
          setemail('')
          setmessage('')
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Something Error",
          {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            progress: undefined,
            hideProgressBar: false,
            pauseOnHover: true,
          }
          );
        },
      );
  }
  return (
    <div className='page' id='Contact'>
      <div className='contacts'>
        <div className='title_name'>Contact </div>
        <div className='contact_column'>
          <p className='discription'>
            Feel free to reach out to me via email for inquiries, collaborations, and connect with me on professional platforms for further networking.
          </p>
          <div>
            {/* <form > */}
            <label htmlFor="" className='label'>Name</label><br />
            <input type="text" className='tags-input' value={name} onChange={(e) => setname(e.target.value)} required /><br />
            <label htmlFor="" className='label'>Email</label><br />
            <input type="email" className='tags-input' value={email} onChange={(e) => setemail(e.target.value)} required /><br />
            <label htmlFor="" className='label'>Message</label><br />
            <textarea className='tags-input area' value={message} onChange={(e) => setmessage(e.target.value)} required /><br />
            <input className='submit_button' type="submit" value="Hit me up " onClick={notify} />
            <ToastContainer />

            {/* </form> */}
          </div>

        </div>

        {/* <hr />  */}
      </div>
    </div>
  )
}
