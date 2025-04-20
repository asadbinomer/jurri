'use client';

import React from 'react'
import Layout from '../components/component/Layout';
import Hero from '../components/pages/about/Hero';
import OurTeam from '../components/pages/about/OurTeam';
import Testimonial from '../components/pages/about/Testimonial';

const About = () => {
  return (
    <Layout>
      <Hero/>
      <OurTeam/>
      <Testimonial/>
    </Layout>
  )
}

export default About