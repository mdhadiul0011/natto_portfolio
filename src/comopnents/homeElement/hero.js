import React from 'react'
import Container from '../reuseablecomponent/container'
import { GoArrowUpRight } from "react-icons/go";
import { PiGlobeSimpleLight } from "react-icons/pi";
import { FaBehance } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Image from 'next/image';
import hero_img from "../../../public/assets/images/hero-img.png"
import hero_img2 from "../../../public/assets/images/Ellipse 6.png"
import hero_img3 from "../../../public/assets/images/Ellipse 4.png"
import hero_img4 from "../../../public/assets/images/Frame.png"
import hero_img5 from "../../../public/assets/images/Object.png"

export default function Hero() {
  return (
    <section className='hero_part'>
        <Container>
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
                    <Image src={hero_img} className='hero-img' alt='hero-img'/>
                    {/* <Image src={hero_img2} className='hero-img-bg' alt='hero-img'/>
                    <Image src={hero_img3} className='hero-img-bg2' alt='hero-img'/>
                    <Image src={hero_img4} className='hero-img-bg3' alt='hero-img'/>
                    <Image src={hero_img5} className='hero-img-bg4' alt='hero-img'/> */}
                </div>
           </div>
        </Container>
    </section>
  )
}
