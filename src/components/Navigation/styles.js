import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.nav`
  background: #ebd9c3; 
  display: flex;
  justify-content: flex-start;
  height: 80px;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  white-space: nowrap;  
`
export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Sora', sans-serif;
`


export const AppLogo = styled.img`
  height: 100%;
`

export const MenuLink = styled(Link)`
  color: #441d0c;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Sora', sans-serif;

  @media screen and (max-width: ${breakpoints.m}px) {
    display: none;
  }

`

export const CartCounter = styled.span`
  background-color: #d0edd9;
  color: #441d0c;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #441d0c;


  @media screen and (max-width: ${breakpoints.m}px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size:1.8rem;
    cursor: pointer;
  }
`

export const CartBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;

  @media screen and (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

export const CartBtnLink = styled(Link)`
  border-radius: 50px;
  background: #9ad3c2;
  padding: 10px 22px;
  color: #441d0c !important;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  font-size: 1.2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fffbf0;
    color: #9ad3c2;
  }
`
