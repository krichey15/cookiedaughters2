import styled from '@emotion/styled';

export const AddToCartButton = styled.button`
    border-radius: 5px;
    background: #9ad3c2;
    padding: 10px 22px;
    color: #441d0c;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    font-size: clamp(1.2rem, 1.25vw, 2rem);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d0edd9;
    }
`