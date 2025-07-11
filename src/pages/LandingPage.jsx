import React from 'react'
import Header from '../components/Header'
import CarouselSlider from '../components/CarouselSlider'
import AboutUs from '../components/AboutUs'
import MegaAnimalAndFeed from '../components/MegaAnimalAndFeed'
import CertifcationCompliance from '../components/CertifcationCompliance'
import GlobalFootPrint from '../components/GlobalFootPrint'
import ImportExport from '../components/Export'
import Footer from '../components/Footer'
import RealEstate from '../components/RealEstate'
import ContactForm from '../components/ContactForm'
import { Helmet } from 'react-helmet-async'


const LandingPage = () => {
    return (
        <div className='h-[400px]'>
            <Helmet>
                <title>Mega Export | Agricultural Supply  And Finance Solutions</title>
                <meta name='description' content='MegasAgriculture is dedicated to revolutionizing agro chain supply in Nigeria and Africa' />
                <meta name='keywords' content='agro tech, agro fintech, agro export, agro import, agro supply, agricultural finance, agricultural' />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Mega Export",
                        url: "https://megasagricultureltd.com",
                        logo: "https://megasagricultureltd.com.com/src/assets/icons/logo.svg",
                        description:
                            "MegaExports is dedicated to revolutionizing agro chain supply in Nigeria and Africa.",
                        sameAs: [
                            "https://www.instagram.com/megas.food.hub.jos?igsh=ODZ2aDhlaGl1cXNy",
                            "https://x.com/megasfoodhubjos?s=11",
                            "https://www.facebook.com/share/19kPUqNjvS/?mibextid=wwXIfr",
                            "https://www.linkedin.com/company/megas-agriculture",
                            "https://www.tiktok.com/@megas.food.hub.jos?_t=ZM-8xvmR20f434&_r=1"
                        ],
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: "info@megaexport.com",
                            telephone: "+234-123-456-7890",
                            contactType: "Customer Service",
                            areaServed: "NG",
                            availableLanguage: "English",
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Jos, Plateau State Nigeria",
                            addressCountry: "NG",
                        },
                    })}
                </script>
            </Helmet>
            <Header />
            <CarouselSlider />
            <AboutUs />
            <MegaAnimalAndFeed />

            <CertifcationCompliance />
            <GlobalFootPrint />
            <RealEstate />
            <ImportExport />
            <ContactForm />
            <Footer />




        </div>
    )
}

export default LandingPage
