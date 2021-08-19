import React, { useState } from 'react';
import { AccordionContainer, AnswerDropdown, CustomAnchor, FaqContainer, QuestionWrapper } from './AccordionElements';
import { FaqData } from './FaqData';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Care from '../../assets/cookie_care.pdf';

const Accordion = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <IconContext.Provider value={{ color: '#441d0c', size: '25px' }}>
            <AccordionContainer>
                <FaqContainer>
                    {FaqData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <QuestionWrapper onClick={() => toggle(index)}>
                                    <h2>{item.question}</h2>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </QuestionWrapper>
                                {clicked === index ? (
                                    <AnswerDropdown>
                                        <p>{item.answer}</p>
                                    </AnswerDropdown>
                                ) : null}
                            </React.Fragment>
                        )
                    })}
                    <QuestionWrapper>
                        <CustomAnchor href={Care} target='_blank' rel="noreferrer">
                            <h2>How do I care for my cookies?</h2>
                        </CustomAnchor>
                    </QuestionWrapper>
                </FaqContainer>
            </AccordionContainer>
        </IconContext.Provider >
    )
}

export default Accordion
