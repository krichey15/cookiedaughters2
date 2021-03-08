import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`
export const RemoveButton = styled.button`
    border-radius: 5px;
    background: #9ad3c2;
    padding: 10px 22px;
    color: #441d0c;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d0edd9;
    }
`

export const CartImage = styled.img`
      height: 100px;
      width: 100px;
`