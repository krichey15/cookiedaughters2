import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { CartContainer, CheckOutButton } from './CartElements'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl, "_self")
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <CartContainer>
      <h1>Cart</h1>
      {lineItems}
      {/* <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p> */}
      {/* <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p> */}
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>

      <CheckOutButton onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</CheckOutButton>
    </CartContainer>
  )
}

export default Cart
