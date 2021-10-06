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
                    <SidebarLink to="/" onClick={toggle}>HOME</SidebarLink>
                    <SidebarLink to="/custom" onClick={toggle}>CUSTOM ORDERS</SidebarLink>
                    <SidebarLink to="/shop" onClick={toggle}>shop</SidebarLink>
                    <SidebarLink to="/faq" onClick={toggle}>FAQ</SidebarLink>
                    <SidebarLink to="/contact" onClick={toggle}>CONTACT</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideCartBtn to="/cart" onClick={toggle}>CART</SideCartBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;