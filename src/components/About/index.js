import React from 'react';
import { firstP } from './aboutText.js';
import { family } from '../../images/sarah-family.jpg';

const About = () => {
    return (
        <div>
            <img src={family} alt='family' className='float-left w-full' />
            <p className='w-full'>{firstP}</p>
        </div>
    )
}

export default About;
