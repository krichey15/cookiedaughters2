import styled from '@emotion/styled';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'

export const SliderSection = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SliderImage = styled.img`
    width: 1000px;
    height: 600px;
    border-radius: 10px;
`
export const RightArrow = styled(IoIosArrowDroprightCircle)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const LeftArrow = styled(IoIosArrowDropleftCircle)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`