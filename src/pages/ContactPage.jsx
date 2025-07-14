import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
    return (
        
            <div className='h-screen flex flex-col justify-between'>
                <Header isTransparent ={true}/>
                <ContactForm />
                <Footer />

            </div>
    
    )
}

export default ContactPage
