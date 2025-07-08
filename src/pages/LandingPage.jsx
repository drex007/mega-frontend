import React from 'react'
import Header from '../components/Header'
import CarouselSlider from '../components/CarouselSlider'
import AboutUs from '../components/AboutUs'
import MegaAnimalAndFeed from '../components/MegaAnimalAndFeed'
import CertifcationCompliance from '../components/CertifcationCompliance'
import WhyChooseUs from '../components/WhyChooseUs'
import GlobalFootPrint from '../components/GlobalFootPrint'
import ImportExport from '../components/Export'
import Footer from '../components/Footer'


const LandingPage = () => {
    return (
        <div className='h-[400px]'>
            <Header />
            <CarouselSlider />
            <AboutUs />
            <MegaAnimalAndFeed />

            <CertifcationCompliance />
            <GlobalFootPrint />
            <ImportExport />
            <Footer />




        </div>
    )
}

export default LandingPage
