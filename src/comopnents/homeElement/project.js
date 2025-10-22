import React from 'react'
import Image from 'next/image'
import { p_data } from '../data/project'
import Reusebtn from '../reuseablecomponent/button'
import Fixedcontainer from '../reuseablecomponent/container'

function Project() {
  return (
    <section id='project'>
        <Fixedcontainer>
          <div className='p-elements'>
            <div className='p-left-part'>
              <h3>I <span>Run</span>  Agency <span>Smartly</span> With My <span>Team</span> Member.</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
              <Reusebtn>Say hello</Reusebtn>
            </div>
            <div className='p-right-part'>
              {
                p_data.map((item, i)=>(
                  <div className='p-right-elements' key={i}>
                    <div className='p-icon'>
                      <Image src={item.img} alt='device-icon'/>
                    </div>
                    <div className='p-text'>
                      <h3>{item.headline}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Fixedcontainer>
    </section>
  )
}

export default Project
