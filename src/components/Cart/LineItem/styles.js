import styled from '@emotion/styled'
import { breakpoints } from '../../../utils/styles'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    @media screen and (max-width: ${breakpoints.s}px){
        flex-direction: column;
    }
    `
export const RemoveButton = styled.button`
    border-radius: 5px;
    background: #9ad3c2;
    padding: 5px 10px;
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

    @media screen and (max-width: ${breakpoints.s}px){
        margin-top: 10px;
        margin-bottom: 30px;
  }
`

export const CartImage = styled.img`
    width: 100px;
    height: 100px;
`

export const QtyUpdateButton = styled.button`
      border-radius: 5px;
      background: #ebd9c3;
      color: #441d0c;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      font-family: 'Open Sans Condensed', sans-serif;
      font-weight: 700;

      &:hover {
          transition: all 0.2s ease-in-out;
          background: gray;
      }
`