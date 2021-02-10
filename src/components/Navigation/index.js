import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import Logo from '../../images/cd-logo.jpg'

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper, Bars, AppLogo, CartBtn, CartBtnLink } from './styles'
=======

import StoreContext from '~/context/StoreContext'
import { CartCounter, Container, MenuLink, Wrapper } from './styles'
>>>>>>> 5447f38dc80c7da38b201d4417217749634d3ba1

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

<<<<<<< HEAD
const activeStyles = {
  color: '#15cdfc'
}

=======
>>>>>>> 5447f38dc80c7da38b201d4417217749634d3ba1
const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <Wrapper>
<<<<<<< HEAD
      <MenuLink to="/">
        {/* <h1>Logo</h1> */}
        <AppLogo src={Logo} alt={siteTitle} />
      </MenuLink>

      <Container>
        <MenuLink to="/pre-order" activeStyle={activeStyles}>Pre-Order</MenuLink>
        <MenuLink to="/custom" activeStyle={activeStyles}>Custom Orders</MenuLink>
        <MenuLink to="/about" activeStyle={activeStyles}>About</MenuLink>
        <MenuLink to="/faq" activeStyle={activeStyles}>F.A.Q.</MenuLink>
      </Container>

      <CartBtn>
        <CartBtnLink to="/cart" activeStyle={activeStyles}>Cart</CartBtnLink>
        {hasItems && <CartCounter>{quantity}</CartCounter>}
      </CartBtn>

      <Bars />

    </Wrapper >
=======
      <Container>
        <MenuLink to="/">{siteTitle}</MenuLink>
        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          Cart 🛍
        </MenuLink>
      </Container>
    </Wrapper>
>>>>>>> 5447f38dc80c7da38b201d4417217749634d3ba1
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
