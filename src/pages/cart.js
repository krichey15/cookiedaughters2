import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import LogoThree from '../components/LogoThree'

const CartPage = () => (
  <Container>
    <LogoThree />
    <h1>Cart</h1>
    <Cart />
  </Container>
)

export default CartPage
