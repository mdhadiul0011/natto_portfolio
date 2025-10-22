'use client'
import React from 'react'
import part_one from "../../../public/assets/images/p_1.png"
import part_two from "../../../public/assets/images/p_2.png"
import part_three from "../../../public/assets/images/p_3.png"
import part_four from "../../../public/assets/images/p_4.png"
import part_five from "../../../public/assets/images/p_3.png"
import Image from 'next/image'
import Slider from "react-slick";
import Fixedcontainer from '../reuseablecomponent/container'

function Partners() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
  return (
    <section className='partners-part'>
      <Fixedcontainer>
        <div className='p_elements'>
            <div className='p_headline'>
                <h3>Reputed Partners</h3>
            </div>
            <div className='p_items-box'>
                <Slider {...settings}>
                    <div className='p_items'>
                        <Image src={part_one} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Happy Mart</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={part_two} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Lori Cracker</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={part_three} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Emad Fashion</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={part_four} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Docco Semims</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={part_five} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Emad Fashion</h3>
                    </div>
                </Slider>
            </div>
        </div>
      </Fixedcontainer>
    </section>
  )
}

export default Partners
