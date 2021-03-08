import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  return (
    <div>
      {lineItems}
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>

      <button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
    </div>
  )
}

export default Cart
