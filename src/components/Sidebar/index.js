import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SideCartBtn } from './SidebarElements.js';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/pre-order" onClick={toggle}>Pre-Order</SidebarLink>
                    <SidebarLink to="/custom" onClick={toggle}>Custom Orders</SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/faq" onClick={toggle}>FAQ</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideCartBtn to="/cart" onClick={toggle}>Cart</SideCartBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;