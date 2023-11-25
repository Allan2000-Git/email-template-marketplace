import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import CustomCarousel from '../components/CustomCarousel'

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutUs/>
            <CustomCarousel/>
            <Footer/>
        </>
    )
}

export default Home
