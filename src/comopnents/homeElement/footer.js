import React from 'react'
import Image from 'next/image'
import f_logo from '../../../public/assets/images/Group 1000004908.png'
import Link from 'next/link'
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { F_resources_data, F_service_data } from '../data/footerdata'
import Fixedcontainer from '../reuseablecomponent/container'

function Footer() {
  return (
    <div id='footer'>
      <Fixedcontainer>
        <div className='f-elements'>
            <div className='f-item'>
                <Link href='#'>
                    <Image src={f_logo} alt='footer-logo'/>
                </Link>
                <p>There are many variations of passages of available, but the majority have suffered.</p>
            </div>
            <div className='f-item'>
                <div className='f-brand'>
                    <h3>Service</h3>
                    {
                        F_service_data.map((item, i)=> (
                            <p key={i}>{item.service_item}</p>
                        ))
                    }
                </div>
            </div>
            <div className='f-item'>
                <div className='f-brand'>
                    <h3>Resources</h3>
                    {
                        F_resources_data.map((item, i)=> (
                            <p key={i}>{item.resources_item}</p>
                        ))
                    }
                </div>
            </div>
            
            <div className='f-item'>
                <div className='f-brand'>
                    <h3>Newsletter </h3>
                    <p>Subscribe for our upcoming latest address and resources</p>
                    <div className='f_form'>
                        <input className='f_input' type='email' placeholder='Email' />
                        <div className='input_icon_box'> 
                            <FaLocationArrow />
                        </div>
                    </div>
                    <div className='f_icons'>
                        <div className='icon'>
                            <FaFacebookF/>
                        </div>
                        <div className='icon'>
                            <FaTwitter/>
                        </div>
                        <div className='icon'>
                            <FaInstagram/>
                        </div>
                        <div className='icon'>
                            <FaPinterestP/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Fixedcontainer>
      <div className='copyright-part'>
        <Fixedcontainer>
            <div className='copyright-element'>
                <div>
                    <p>Copyright @All rights reserved</p>
                </div>
                <div className='f_copy_icons'>
                        <div className='icon'>
                            <FaFacebookF/>
                        </div>
                        <div className='icon'>
                            <FaTwitter/>
                        </div>
                        <div className='icon'>
                            <FaInstagram/>
                        </div>
                        <div className='icon'>
                            <FaPinterestP/>
                        </div>
                    </div>
            </div>
        </Fixedcontainer>
      </div>
    </div>
  )
}

export default Footer
