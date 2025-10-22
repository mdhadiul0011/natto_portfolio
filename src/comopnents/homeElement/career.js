'use client'
import React from 'react'
import Container from '../reuseablecomponent/container'
import career_img from "../../../public/assets/images/man.png"
import Image from 'next/image'
import Button from '../reuseablecomponent/button'
import { IoMdCheckmark } from "react-icons/io";
import CountUp from 'react-countup'

function Career() {
  return (
    <section id='careers'>
        <Container>
            <div className='careers-element'>
                <div className='c_left_part'>
                    <Image src={career_img} alt='career-img' className='c_img'/>
                    <div className='c-left-text'>
                        <h3>5+ <span>Year</span></h3>
                        <p>Experience</p>
                    </div>
                </div>
                <div className='c_right_part'>
                    <div className='c_right_text'>
                        <h3>We <span>Run</span>  Agency <span>Smartly</span> With Our <span>Team</span> Member.</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        <div className='c_text_bold'>
                            <p><span><IoMdCheckmark /></span>There are many variations of passages of.</p>
                            <p><span><IoMdCheckmark /></span>There are many variations of passages of.</p>
                            <p><span><IoMdCheckmark /></span>There are many variations of passages of.</p>
                            <p><span><IoMdCheckmark /></span>There are many variations of passages of.</p>
                        </div>
                        <Button>Explore More</Button>
                        <div className='counter-part'>
                            <div className='item-one'>
                                <p><CountUp end={30} delay={1} className='counter'/>+</p>
                                <h3>Team Member</h3>
                            </div>
                            <div className='item-one'>
                                <p><CountUp end={150} delay={1} className='counter'/></p>
                                <h3>Complete Project</h3>
                            </div>
                            <div className='item-one'>
                                <p><CountUp end={50} delay={1} className='counter'/>+</p>
                                <h3>Satisfied Clients</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Career
