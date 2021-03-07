import styled from '@emotion/styled'

export const FormContainer = styled.div`
    border-radius: 5px;
    background-color: #fffbf0;
    padding: 20px;
`

export const FormInput = styled.input`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`
export const CustomSelect = styled.select`
    width: 20%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const CustomText = styled.textarea`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

export const FormButton = styled.button`
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