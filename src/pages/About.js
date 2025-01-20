import React from 'react'
import Features from '../components/Features'
import InnerBanner from '../components/InnerBanner'

const About = () => {
  return (
    <>
    <InnerBanner title={'About Us'} breadCrumps={[{ title: 'Home', link: '/' }, { title: 'About', current: true }]} />
      <Features />      
    </>
  )
}

export default About
