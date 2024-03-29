import styled from '@emotion/styled';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby';
import { breakpoints } from '../../utils/styles';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #d0edd9;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #441d0c;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #441d0c;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;

    @media screen and (max-width: ${breakpoints.s}px) {
        grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color:#fff;
    cursor: pointer;
    font-family: 'BenchNine', sans-serif;

    &:hover {
        color: #9ad3c2;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SideCartBtn = styled(Link)`
    border-radius: 50px;
    background: #9ad3c2;
    white-space: nowrap;
    padding: 16px 64px;
    color: #441d0c;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'BenchNine', sans-serif;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fffbf0;
        color: #9ad3c2;
    }
`