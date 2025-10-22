import Blog from '@/comopnents/homeElement/blog'
import Career from '@/comopnents/homeElement/career'
import Footer from '@/comopnents/homeElement/footer'
import Header from '@/comopnents/homeElement/header'
import Hero from '@/comopnents/homeElement/hero'
import Partners from '@/comopnents/homeElement/partners'
import Project from '@/comopnents/homeElement/project'
import Service from '@/comopnents/homeElement/services'
import Subscribe from '@/comopnents/homeElement/subscribe'
import React from 'react'

export default function Homepart() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Project/>
      <Career/>
      <Blog/>
      <Partners/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
