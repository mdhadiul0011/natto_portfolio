'use client'
import React from 'react'
import blog_one from "../../../public/assets/images/blog-1.png"
import blog_two from "../../../public/assets/images/blog-2.png"
import blog_three from "../../../public/assets/images/blog-3.png"
import blog_four from "../../../public/assets/images/blog-4.png"
import Image from 'next/image'
import { SlCalender } from "react-icons/sl";
import Slider from "react-slick";
import SampleNextArrow from '../reuseablecomponent/nextarrow'
import SamplePrevArrow from '../reuseablecomponent/prevarrow'
import Fixedcontainer from '../reuseablecomponent/container'

function Blog() {
     var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <div className='blog'>
        <Fixedcontainer>
            <div className='blog-elements'>
                <div className='b_headline'>
                    <h3>Latest Blog</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                </div>
                <div className='b_box'>
                    <Slider {...settings}>
                        <div className='box_item'>
                            <Image src={blog_one} alt='blog-img' className='blg_img' priority={true}/>
                            <span><SlCalender /> 10 January 2023 </span>
                            <h3>Bitcoin and Economic Freedom</h3>
                            <a href='#'>Read More</a>
                        </div> 
                        <div className='box_item'>
                            <Image src={blog_two} alt='blog-img' className='blg_img' priority={true}/>
                            <span><SlCalender /> 10 January 2023 </span>
                            <h3>Permalink to New World Wide Payment</h3>
                            <a href='#'>Read More</a>
                        </div> 
                        <div className='box_item'>
                            <Image src={blog_three} alt='blog-img' className='blg_img' priority={true}/>
                            <span><SlCalender /> 10 January 2023 </span>
                            <h3>Exchange Rate ofBitcoin system</h3>
                            <a href='#'>Read More</a>
                        </div> 
                        <div className='box_item'>
                            <Image src={blog_four} alt='blog-img' className='blg_img' priority={true}/>
                            <span><SlCalender /> 10 January 2023 </span>
                            <h3>Bitcoin and Economic Freedom</h3>
                            <a href='#'>Read More</a>
                        </div>
                    </Slider>
                </div>
            </div>
        </Fixedcontainer>
    </div>
  )
}

export default Blog
