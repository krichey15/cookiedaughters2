import styled from '@emotion/styled';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'

export const SliderSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 10%;
    align-items: center;
`
export const SliderImage = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    `
export const RightArrow = styled(IoIosArrowDroprightCircle)`
    position: absolute;
    top: 40%;
    right: -10%;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const LeftArrow = styled(IoIosArrowDropleftCircle)`
    position: absolute;
    top: 40%;
    left: -10%;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`