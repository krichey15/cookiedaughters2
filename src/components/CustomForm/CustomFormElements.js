import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'


export const FormContainer = styled.div`
    border-radius: 5px;
    background-color: #fffbf0;
    padding: 5%;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    font-size: clamp(1.2rem, 1.25vw, 2rem);

`

export const FormInput = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media screen and (max-width: ${breakpoints.m}px) {
        width: 75%;
    }
`
export const CustomSelect = styled.select`
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media screen and (max-width: ${breakpoints.m}px) {
        width: 50%;
    }
`

export const CustomText = styled.textarea`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media screen and (max-width: ${breakpoints.m}px) {
        width: 75%;
    }
`

export const FormButton = styled.button`
    border-radius: 5px;
    background: #9ad3c2;
    padding: 10px 22px;
    color: #441d0c;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d0edd9;
    }
`