import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0rem;
  }
`

export const Product = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;

  :before {
    content: '- ';
  }
`
