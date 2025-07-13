import { cert1, cert2, cert3, cert4, cert5 } from '../assets'
import fadeIn from './Variant'
import { motion } from 'framer-motion'



const CertifcationCompliance = () => {
    return (
        <motion.div

            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
        >
            <div className='lg:rounded-t-[100px]  bg-primary-green-black lg:pb-8'>
                <p className='flex justify-center text-green-200 2xl:text-[70px] lg:text-[64px] text-[20px] py-8 font-neulis font-light'>CERTIFCATIONS & COMPLIANCE</p>
                <p className='flex lg:justify-center text-white font-fractul lg:px-16 px-4 lg:text-[15px] text-[12px]'>Megas Agriculture Limited is a fully certified, internationally compliant agribusiness and export company. We uphold the highest standards of transparency, sustainability, and quality assurance across our operations.</p>

                <div className='lg:p-8 p-4'>
                    <div className='lg:flex grid grid-cols-1 justify-between p-4'>
                        <div className='lg:w-1/3 flex items-center space-x-4'>
                            <img src={cert1} />
                            <p className='text-white font-fractul lg:text-[15px] text-[12px]'>Registered with the Corporate Affairs Commission (Nigeria) RC 6944026</p>
                        </div>
                        <div className=' lg:w-2/6 2xl:w-2/5 flex items-center space-x-4 lg:mt-0 mt-4'>
                            <img src={cert4} className="lg:w-1/3 w-1/4" />
                            <p className='text-white font-fractul lg:text-[15px] text-[12px]'>Licensed Agro-Exporter with the Nigerian Export Promotion Council (NEPC)</p>
                        </div>



                    </div>
                    <div className='lg:flex grid grid-cols-1  lg:justify-between p-4'>
                        <div className='lg:w-1/3 flex items-center space-x-4 lg:mb-0 mb-4'>
                            <img src={cert2} />
                            <p className='text-white font-fractul lg:text-[15px] text-[12px]'>Registered with Corporations Canada</p>
                        </div>
                        <div className='lg:w-1/3 flex items-center space-x-4'>
                            <img src={cert5} />
                            <p className='text-white font-fractul lg:text-[15px] text-[12px]'>Compliant with International Agro Export Standards (HACCP, Global GAP, Phytosanitary Compliance, Organic Certifications)</p>
                        </div>



                    </div>
                    <div className='lg:flex grid grid-cols-1 lg:justify-between p-4'>
                        <div className='lg:w-1/3 items-center space-x-4 flex'>
                            <img src={cert3} />
                            <p className='text-white font-fractul lg:text-[15px] text-[12px]'>Compliant with International Agro Export Standards (HACCP, Global GAP, Phytosanitary Compliance, Organic Certifications)</p>
                        </div>


                    </div>
                </div>
                <div className='lg:p-16 p-4'>
                    <p className='text-green-300 lg:text-[40px] text-[20px] font-neulis font-extra-light'>What This Means for You:</p>
                    <div className='font-fractul text-white lg:text-[16px] text-[12px]'>
                        • Guaranteed product quality
                        <br></br>• Hassle-free export processes
                        <br></br> • Transparent documentation and traceability
                        <br></br>• Regulatory assurance in multiple trade zones (Africa, North America, Europe)
                        <p className='py-8 italic'>Every shipment from Megas Agriculture meets global trade standards and is backed by a reliable, transparent, and ethical supply chain.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CertifcationCompliance
