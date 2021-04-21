import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { IoLogoTiktok } from 'react-icons/io5'
import { FaRegEnvelope } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'
import Mixer from '../../images/sarah-mixer.jpg'

const ContactForm = () => {
    return (
        <section className='py-8 font-condensed text-fluid'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap'>
                    <div className='grid grid-cols-2 md-max:grid-rows-2 md-max:grid-cols-none'>

                        <div>
                            <img src={Mixer} alt="sarah mixer" className='w-full' />
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div>
                                <h2 className='text-center uppercase mb-5 text-black'>Contact us</h2>
                            </div>
                            <div className='text-center text-4xl'>
                                <a href="https://www.instagram.com/cookiedaughters/" target="_blank" rel="noreferrer" aria-label="Go to Instagram" className='text-black'><IoLogoInstagram className='hover:text-green-250' /></a>

                                <a href="https://www.tiktok.com/@cookiedaughters?" target="_blank" rel="noreferrer" aria-label="Go to Tik tok" className='text-black'><IoLogoTiktok className='hover:text-green-250' /></a>

                                <a href="https://www.facebook.com/cookiedaughters" target="_blank" rel="noreferrer" aria-label="Go to Facbook" className='text-black'><IoLogoFacebook className='hover:text-green-250' /></a>
                            </div>

                            <div className='justify-center text-center'>
                                <div className='flex items-center justify-center py-2'>
                                    <FaRegEnvelope className='text-2xl mr-2.5 text-center w-7 h-7' />
                                    <a href="mailto:Sarah@cookiedaughters.com" className='no-underline text-black hover:text-green-250'>Sarah@cookiedaughters.com</a>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <GrMapLocation className='text-2xl mr-2.5 text-center w-7 h-7' />
                                    <a href="https://goo.gl/maps/3mYYmP52UiSrF8hKA" target="_blank" rel="noreferrer" className='no-underline text-black hover:text-green-250'>Sequim, WA</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </section >
    )
}

export default ContactForm
