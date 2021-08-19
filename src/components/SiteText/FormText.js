import React from 'react';
import { BoldParagraph, PageText, CenteredX, CustomAnchor } from './FormTextElements';
import Terms from '../../assets/cd_terms.pdf';

const FormText = () => {
    return (
        <PageText>

            <CenteredX>
                <h2>PRICE GUIDE</h2>
            </CenteredX>

            <BoldParagraph>Custom Designed and Decorated - Curated sugar cookies just for you</BoldParagraph>
            <ul>
                <li>Starting at $55 per dozen/2 dozen order minimum</li>
                <li>Cookies will range from 3”-4.5” in size</li>
                <li>Price is dependent on design, number of colors/shapes needed and any added detail/metallics/character design etc.</li>
                <li>Character/Logo cookies start at $65.</li>
            </ul>

            <BoldParagraph>Just for Eating Add On - Simply iced circle cookies the color of your choosing</BoldParagraph>
            <ul>
                <li>$24 per dozen/1 dozen order minimum to be added to any custom order</li>
                <li>Cookies are 3” in size</li>
                <li>Add sprinkles for an additional $2</li>
            </ul>

            <BoldParagraph>Mini Cookie Add On - Cute little cookies to match your custom set</BoldParagraph>
            <p>$25 per dozen/1 dozen order minimum to be added to any custom order Cookies will range from 1” - 2” in size</p>

            <CenteredX>
                <h2>COOKIE INFO</h2>
            </CenteredX>

            <ul>
                <li>Each cookie will come individually heat sealed for freshness and will be beautifully boxed for your event.  Our sugar cookies are flavored with 3 different types of vanilla, including vanilla bean paste, and will have a fresh squeezed lemon vanilla royal icing, offering a modern twist on the classic vanilla cookie we all love.</li>

                <br />

                <li>Orders should be placed a minimum of 4 weeks before your desired pickup date (5-6 weeks is preferred).  Please see the banner at the top of the page for my current availability.</li>

                <br />

                <li>Cookie pick-ups are on Thursday-Saturday from my home in Sequim.  Pick the best day for your event.  For example, if you have a party on Saturday choose Thursday or Friday for your pickup date, or if you have an event on Tuesday choose Saturday as your pickup date.  Since all cookies are individually heat sealed they will stay fresh in packaging for up to 2 weeks.  Cookies may also be frozen to seal in freshness and give them an even longer life!</li>

                <br />

                <li>Please see our Terms and Conditions <CustomAnchor href={Terms} target='_blank' rel="noreferrer">HERE</CustomAnchor></li>
            </ul>

        </PageText>
    )
}

export default FormText;
