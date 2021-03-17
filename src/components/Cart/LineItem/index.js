import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { CartImage, RemoveButton, Wrapper } from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
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
      option => `${option.name}:\xa0\xa0${option.value} \xa0\xa0\xa0\xa0`
    )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
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
      <p>
        Qty:&nbsp;
        {item.quantity}
      </p>

      <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
    </Wrapper>
  )
}

export default LineItem
