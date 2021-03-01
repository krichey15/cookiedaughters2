import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SideCartBtn, SideCartCounter } from './SidebarElements.js';

const Sidebar = () => {
    return (
        <SidebarContainer>

            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/pre-order">Pre-Order</SidebarLink>
                    <SidebarLink to="/custom">Custom Orders</SidebarLink>
                    <SidebarLink to="/about">About</SidebarLink>
                    <SidebarLink to="/faq">F.A.Q.</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideCartBtn to="/cart">Cart</SideCartBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;