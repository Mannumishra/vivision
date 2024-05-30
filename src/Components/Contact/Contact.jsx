import React, { useEffect } from 'react'
import "./Contact.css"
import callimage from '../../Images/product/coldcalling.jpg'
const Contact = () => {
  
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div className="contactsection">
          <div className="contactheading">
            <p>Get In Touch</p>
          </div>
          <div className="conatcatap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.623489113986!2d77.08617907375734!3d28.73079607961482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d07440faeeedd%3A0x7fd3b4b030819bdf!2sDigi%20India%20Solutions!5e0!3m2!1sen!2sin!4v1716878720249!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contactform">
            <div className="contactimage">
                <img src={callimage} alt="" />
            </div>
            <div className="contacttextdata">
              <div className="contactheading">
                <p>for any enquery please send message</p>
              </div>
                <div className="mb-3">
                  <label htmlFor="">Name</label>
                  <input type="text" name="name" id="" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Phone</label>
                  <input type="text" name="phone" id="" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" id="" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Address</label>
                  <input type="text" name="address" id="" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="">State</label>
                  <input type="text" name="state" id="" className='form-control'/>
                </div>
                <div className="mb-3">
                  <label htmlFor="">Message</label>
                 <textarea name="message" id="" className='form-control'></textarea>
                </div>
                <div className="mb-3">
                  <button>Send Message</button>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact