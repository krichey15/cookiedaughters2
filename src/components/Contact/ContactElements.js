import styled from "@emotion/styled";
import { FaRegEnvelope } from 'react-icons/fa'
import { GrMapLocation } from 'react-icons/gr'

export const ContactSection = styled.section`
    background-color: #fff;
    padding: 2rem 0;
    text-align: center;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    font-size: clamp(1.2rem, 1.5vw, 2rem);
`

export const MixerContainer = styled.div`
    float: left;
    width: 50%;
    justify-content: center;
    align-items: flex-start;
`
export const MixerImage = styled.img`
    width: 100%;
`

export const ContactDiv = styled.div`
    text-align: left;
    float: left;
`

export const StyledHTwo = styled.h2`
    color: #000;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;  
`

export const StyledLineItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    list-style-type: none;
`

export const StyledAnchorTag = styled.a`
    color: #000;
    text-decoration: none;

    &:hover {
        color: #9ad3c2;
    }
`

export const StyledEnv = styled(FaRegEnvelope)`
    font-size: 1.5rem;
    line-height: 30px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    text-align: center;
`

export const StyledMap = styled(GrMapLocation)`
    font-size: 1.5rem;
    line-height: 30px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    text-align: center;
`

export const IconUl = styled.div`
    text-align: center;
    font-size: 4rem;
`