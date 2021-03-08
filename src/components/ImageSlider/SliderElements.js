import styled from '@emotion/styled';
import { CgArrowLongLeftR, CgArrowLongRightR } from 'react-icons/cg'

export const SliderSection = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SliderImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    `
export const RightArrow = styled(CgArrowLongRightR)`
    position: absolute;
    top: 50%;
    right: 50px;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`

export const LeftArrow = styled(CgArrowLongLeftR)`
    position: absolute;
    top: 40%;
    left: -10%;
    font-size: clamp(2rem, 5vw, 3rem);
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`