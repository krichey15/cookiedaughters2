import React from 'react';
import Daughters from '../../images/home-banner.jpg'
import { BannerContainer, BannerImage } from './BannerElements';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src={Daughters} alt="banner-image" />
        </BannerContainer>
    )
}

export default Banner;
