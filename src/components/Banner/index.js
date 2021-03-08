import React from 'react';
import Valentine from '../../images/valentine-cookies.jpg'
import { BannerContainer, BannerImage } from './BannerElements';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerImage src={Valentine} alt="banner-image" />
        </BannerContainer>
    )
}

export default Banner;
