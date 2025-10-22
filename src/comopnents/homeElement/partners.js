'use client'
import React from 'react'
import Container from '../reuseablecomponent/container'
import p_1 from "../../../public/assets/images/p_1.png"
import p_2 from "../../../public/assets/images/p_2.png"
import p_3 from "../../../public/assets/images/p_3.png"
import p_4 from "../../../public/assets/images/p_4.png"
import p_5 from "../../../public/assets/images/p_3.png"
import Image from 'next/image'
import Slider from "react-slick";

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
      <Container>
        <div className='p_elements'>
            <div className='p_headline'>
                <h3>Reputed Partners</h3>
            </div>
            <div className='p_items-box'>
                <Slider {...settings}>
                    <div className='p_items'>
                        <Image src={p_1} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Happy Mart</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={p_2} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Lori Cracker</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={p_3} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Emad Fashion</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={p_4} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Docco Semims</h3>
                    </div>
                    <div className='p_items'>
                        <Image src={p_5} alt='partners-img' className='p_img' priority={true}/>
                        <h3>Emad Fashion</h3>
                    </div>
                </Slider>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Partners
