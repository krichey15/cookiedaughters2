import styled from '@emotion/styled'

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #fff;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
`

export const FaqContainer = styled.div`
    position: absolute;
    top: 30%;
`

export const QuestionWrapper = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1 {
    padding: 2rem;
    }
    
    span {
    margin-right: 1.5rem;
    }
`

export const AnswerDropdown = styled.div`
    background: #fff;
    color: #000;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #9ad3c2;
    border-top: 5px solid #9ad3c2;

`