import React from 'react'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import { IoLogoTiktok } from 'react-icons/io5'
import { ContactDiv, ContactSection, StyledAnchorTag, StyledEnv, StyledHTwo, StyledLineItem, StyledMap, IconUl } from './ContactElements'

const ContactForm = () => {
    return (
        <ContactSection>
            <ContactDiv>
                <StyledHTwo>Contact us</StyledHTwo>
                <IconUl>
                    <StyledAnchorTag href="https://www.instagram.com/cookiedaughters/" target="_blank"><IoLogoInstagram /></StyledAnchorTag>

                    <StyledAnchorTag href="https://www.tiktok.com/@cookiedaughters?" target="_blank"><IoLogoTiktok /></StyledAnchorTag>

                    <StyledAnchorTag href="https://www.facebook.com/cookiedaughters" target="_blank"><IoLogoFacebook /></StyledAnchorTag>
                </IconUl>
                <ul>
                    <StyledLineItem>
                        <StyledEnv />
                        <StyledAnchorTag href="mailto:Sarah@cookiedaughters.com">Sarah@cookiedaughters.com</StyledAnchorTag>
                    </StyledLineItem>

                    <StyledLineItem>
                        <StyledMap />
                        <StyledAnchorTag href="https://goo.gl/maps/3mYYmP52UiSrF8hKA" target="_blank">Sequim, WA</StyledAnchorTag>
                    </StyledLineItem>
                </ul>

            </ContactDiv>

        </ContactSection>
    )
}

export default ContactForm
