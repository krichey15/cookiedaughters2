import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { CartImage, QtyUpdateButton, RemoveButton, Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem, updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = item.variant.image ? (
    <CartImage
      src={item.variant.image.src}
      alt={`${item.title} product shot`}
    />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
      option => `${option.name}:\xa0${option.value} `
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const handleInput = ({ target }) => {
    switch (target.name) {
      case 'plus':
        updateLineItem(client, checkout.id, item.id, item.quantity + 1)
        break;
      case 'minus':
        updateLineItem(client, checkout.id, item.id, item.quantity - 1)
        break;
      default:
        break;
    }
  }


  return (
      <Wrapper>
        {console.log(item)}
        <Link to={`/product/${item.variant.product.handle}/`}>
          {variantImage}
        </Link>
        <p>
          {item.title}
          {`  `}
        </p>
        {selectedOptions}
        <QtyUpdateButton onClick={handleInput} name="minus">-</QtyUpdateButton>
        {item.quantity}
        <QtyUpdateButton onClick={handleInput} name="plus">+</QtyUpdateButton>

        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </Wrapper>
  )
}

export default LineItem
