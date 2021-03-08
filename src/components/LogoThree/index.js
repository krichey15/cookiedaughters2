import React from 'react';
import LogoThreeImage from '../../images/cookie-daughters-logo-3-transparent.png';
import { LogoContainer, StyledLogoImage } from './LogoElements';

const LogoThree = () => {
    return (
        <LogoContainer>
            <StyledLogoImage src={LogoThreeImage} alt="Logo 3 image" />
        </LogoContainer>
    )
}

export default LogoThree
