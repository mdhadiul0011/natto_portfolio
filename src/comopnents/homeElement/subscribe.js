import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import Fixedcontainer from '../reuseablecomponent/container';

function Subscribe() {
  return (
    <section className='subs_part'>
      <Fixedcontainer>
        <div className='subs_elements'>
            <div className='subs_text'>
                <h3>Subscirbe to Our Newsletter</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            </div>
            <div className='subs_input'>
                <div className='inputs'>
                    <input type='text' placeholder='Email'/>
                    <div className='send_icon'>
                        <FaLocationArrow />
                    </div>
                </div>
            </div>
        </div>
      </Fixedcontainer>
    </section >
  )
}

export default Subscribe
