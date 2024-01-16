import React from 'react';
import './Testimonials.css';
import { testimonial1, testimonial2, testimonial3 } from "../../assets";

const Testimonials = () => {
  return (
    <section id='testimonials' className='dark-gray'>
      <div className='wrapper'>
        <h2>What Our Students Say</h2>
        <div className='content-container'>

          <div className='testimonial'>
            <img src={testimonial1} alt="" />
            <div className='reviewer-details'>
              <div className='name'> Peter Adams</div>
              <div className='company-name'>Google</div>
              <div className='review'>great course</div>
            </div>
          </div>
          <div className='testimonial'>
            <img src={testimonial2} alt="" />
            <div className='reviewer-details'>
              <div className='name'> Robert Fox</div>
              <div className='company-name'>EY</div>
              <div className='review'>got aa lot to learn</div>
            </div>
          </div>
          <div className='testimonial'>
            <img src={testimonial3} alt="" />
            <div className='reviewer-details'>
              <div className='name'> Emily Smith</div>
              <div className='company-name'>Meta</div>
              <div className='review'>Awesome</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;