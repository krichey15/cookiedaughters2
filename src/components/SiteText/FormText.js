import React from 'react'
import { BoldParagraph, PageText } from './FormTextElements';

const FormText = () => {
    return (
        <PageText>
            <p>
               Thank you for your interest in ordering custom cookies from Cookie Daughters!
            </p>

            <p>
                Pricing for cookies is reflective of the time spent baking, color mixing, designing, icing and packaging.  I design custom cookie cutters for most of my cookies to ensure your order is absolutely perfect.  Each cookie will come individually heat sealed for freshness and will be beautifully boxed for your event.  Our sugar cookies are flavored with vanilla and have a fresh lemon vanilla royal icing offering a modern twist on the classic vanilla cookie we all love.  
            </p>

            <p>Orders should be placed a minimum of 2-3 weeks before your event (4-6 weeks is preferred).  Our order minimum is 1 dozen cookies.</p>
            <ul>
                <li>
                    1 Dozen Regular Sized Vanilla Lemon Sugar Cookies - $45+ 
                    <ul>
                        <li>Price is dependent on design, number of colors/shapes needed and any added detail/metallics/character design etc.  Character cookies start at $65.</li>
                    </ul>
                </li>
                <li>1 dozen Mini Vanilla Lemon Cookies add on - $20/dozen</li>
                <li>Cookie Cake Topper - $15+ (price dependent on size and detail of design)</li>
                <li>Cookies can be wrapped with a bow for an additional $8/dozen</li>
            </ul>
            <p>
                Thank you for considering me to be a part of your special event, holiday or for ordering cookies just because.  It is a true joy to create these cookies for you.
            </p>
            <BoldParagraph>
                Please fill out all the questions below with as much detail as possible.  The more the better!  Submitting a custom order request does not guarantee that I will be able to take on your order.  After completing your submission you should expect a response from me within 48 hours.  
            </BoldParagraph>
            <BoldParagraph>
                Cookies must be paid in full to secure your order.  50% of this payment is a non-refundable deposit should you need to cancel your order.  Orders must be cancelled 1 week before pickup to receive a 50% refund.
            </BoldParagraph>

        </PageText>
    )
}

export default FormText;
