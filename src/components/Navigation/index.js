import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Logo from '../../images/cd-logo-trans-white.png'
import { RiShoppingCartLine } from 'react-icons/ri'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Bars, AppLogo, CartBtn, CartBtnLink, HomeLink } from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const activeStyles = {
  color: '#fffbf0'
}

const Navigation = ({ siteTitle, toggle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
      <HomeLink to="/">
        <AppLogo src={Logo} alt={siteTitle} />
      </HomeLink>

      <Container>
        <MenuLink to="/cookies" activeStyle={activeStyles}>Cookies</MenuLink>
        <MenuLink to="/custom" activeStyle={activeStyles}>Custom Orders</MenuLink>
        <MenuLink to="/about" activeStyle={activeStyles}>About</MenuLink>
        <MenuLink to="/faq" activeStyle={activeStyles}>FAQ</MenuLink>
      </Container>

      <CartBtn>
        <CartBtnLink to="/cart" activeStyle={activeStyles}><RiShoppingCartLine /></CartBtnLink>
        {hasItems && <CartCounter>{quantity}</CartCounter>}
      </CartBtn>

      <Bars onClick={toggle} />

    </Wrapper >
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
