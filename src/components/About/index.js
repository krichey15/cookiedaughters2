import React from 'react';
import firstP from './aboutText.js';
import secondP from './aboutText2';
import Family from '../../images/sarah-family.jpg';

const About = () => {
    return (
        <div className='flex justify-center items-center flex-col font-condensed text-fluid'>
            <h2>A Little About Me</h2>

            <div>
                <div className="float-left w-1/2 md-max:w-2/3 sm-max:w-full mr-8 mt-7 md-max:mt-5">
                    <img src={Family} alt='family' className='w-full' />
                </div>
                <div>
                    <p>{firstP}</p>
                    <p>{secondP}</p>
                </div>
            </div>
        </div>
    )
}

export default About;
