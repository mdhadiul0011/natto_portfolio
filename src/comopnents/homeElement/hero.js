import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Image from 'next/image';
import heropic from "../../../public/assets/images/hero-img.png"
import Fixedcontainer from '../reuseablecomponent/container';

export default function Hero() {
  return (
    <section className='hero_part'>
        <Fixedcontainer>
           <div className='hero_elements'>
                <div className='hero_left'>
                    <div className='hero_left_text'>
                        <h1><span>Creative</span> Design and Work <span>Solution</span></h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        <button className='hero_btn'>Say Hello</button>
                        <a href='#'>My work 
                        <span><GoArrowUpRight /></span></a>
                        <div className='left-icons'>
                            <span>Follow me on</span>
                            <ul>
                                <li><FaBehance/></li>
                                <li><PiGlobeSimpleLight/></li>
                                <li><MdMarkEmailRead/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='hero_right'>
                    <Image src={heropic} className='hero-img' alt='hero-img'/>
                </div>
           </div>
        </Fixedcontainer>
    </section>
  )
}
