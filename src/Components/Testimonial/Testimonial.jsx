import React from 'react'
import "./Testimonial.css"
const Testimonial = () => {
    return (
      <>
    <section className='mb-5'>
    <p className='testimonialheading'>What Our Clients Say</p>
        <div className="testimonialContainer">
           <div className="testimonialContent">
               <div className='imagetestimonialdiv'> 
               <img src="https://sunyatasatchitananda.b-cdn.net/wp-content/uploads/2018/10/young-man-1281282_1920-986x1200.jpg" alt="Sarah Johnson" className="clientPhoto" />
               </div>
               <div className="testimonialText">
                   <p className="testimonial">
                       "Working with [Your Company Name] has been a game-changer for our marketing efforts.
                       Their team's expertise and dedication have significantly boosted our brand visibility and engagement.
                       We saw a 40% increase in website traffic within the first three months of our collaboration.
                       I highly recommend [Your Company Name] to anyone looking to elevate their marketing strategy."
                   </p>
                   <p className="clientName">Sarah Johnson</p>
                   <p className="clientPosition">Marketing Manager, Bright Future Co.</p>
               </div>
           </div>
           <div className="testimonialContent">
              <div className='imagetestimonialdiv'>
              <img src="https://thumbs.dreamstime.com/b/smiling-business-man-using-laptop-portrait-giving-you-warm-smile-242736420.jpg" alt="Sarah Johnson" className="clientPhoto" />
              </div>
               <div className="testimonialText">
                   <p className="testimonial">
                       "Working with [Your Company Name] has been a game-changer for our marketing efforts.
                       Their team's expertise and dedication have significantly boosted our brand visibility and engagement.
                       We saw a 40% increase in website traffic within the first three months of our collaboration.
                       I highly recommend [Your Company Name] to anyone looking to elevate their marketing strategy."
                   </p>
                   <p className="clientName">Sarah Johnson</p>
                   <p className="clientPosition">Marketing Manager, Bright Future Co.</p>
               </div>
           </div>
           <div className="testimonialContent">
              <div className='imagetestimonialdiv'>
              <img src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Sarah Johnson" className="clientPhoto" />
              </div>
               <div className="testimonialText">
                   <p className="testimonial">
                       "Working with [Your Company Name] has been a game-changer for our marketing efforts.
                       Their team's expertise and dedication have significantly boosted our brand visibility and engagement.
                       We saw a 40% increase in website traffic within the first three months of our collaboration.
                       I highly recommend [Your Company Name] to anyone looking to elevate their marketing strategy."
                   </p>
                   <p className="clientName">Sarah Johnson</p>
                   <p className="clientPosition">Marketing Manager, Bright Future Co.</p>
               </div>
           </div>
       </div>
    </section>
      </>
    )
}

export default Testimonial