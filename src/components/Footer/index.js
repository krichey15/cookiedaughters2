import React from 'react';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { IoLogoTiktok, IoLogoAmazon } from 'react-icons/io5'
import { FooterP, IconDiv } from './FooterElements';

const Footer = () => {

    return (
        <>
            <IconDiv className='text-center text-4xl'>
                <a href="https://www.instagram.com/cookiedaughters/" target="_blank" rel="noreferrer" aria-label="Go to Instagram" className='text-black'><IoLogoInstagram className='hover:text-green-250' /></a>

                <a href="https://www.tiktok.com/@cookiedaughters?" target="_blank" rel="noreferrer" aria-label="Go to Tik tok" className='text-black'><IoLogoTiktok className='hover:text-green-250' /></a>

                <a href="https://www.facebook.com/cookiedaughters" target="_blank" rel="noreferrer" aria-label="Go to Facbook" className='text-black'><IoLogoFacebook className='hover:text-green-250' /></a>

                <a href="https://www.amazon.com/shop/cookiedaughters" target="_blank" rel="noreferrer" aria-label="Go to Facbook" className='text-black'><IoLogoAmazon className='hover:text-green-250' /></a>
            </IconDiv>
            <div className='flex justify-center items-center'>
                <FooterP>
                    © {new Date().getFullYear()} Cookie Daughters, Built by
                    {` `}
                    <a href="https://www.kyle-richey.com">Kyle Richey</a>
                </FooterP>
            </div>
        </>
    );
};

export default Footer;