import React from 'react';
import { FooterP } from './FooterElements';

const Footer = () => {

    return (
        <div className='flex justify-center items-center'>
            <FooterP>
                © {new Date().getFullYear()} Cookie Daughters, Built by
            {` `}
                <a href="https://www.kyle-richey.com">Kyle Richey</a>
            </FooterP>
        </div>
    );
};

export default Footer;