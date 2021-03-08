import React from 'react';
import { CustomSelect, CustomText, FormButton, FormContainer, FormInput } from './CustomFormElements';

const CustomForm = () => {
    return (
        <FormContainer>
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <label htmlFor="name">Name: </label>
                <FormInput type="text" id="name" name="name" />

                <label htmlFor="company">Company(if applicable): </label>
                <FormInput type="text" id="company" name="company" />

                <label htmlFor="email">Email: </label>
                <FormInput type="email" id="email" name="email" />

                <label htmlFor="phone">Phone: </label>
                <FormInput type="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />

                <label htmlFor="date">Date Needed:</label>
                <FormInput type="date" id="date" name="date" />
                <p><small>Not the day of the event - usually 1 or 2 days before.  What day do you need to be holding your cookies?</small></p>

                <label htmlFor="cookie-count">How many cookies would you like to order?</label>
                <FormInput type="number" id="cookie-count" name="cookie-count" min="12" placeholder="12" />
                <p><small>Min is 12 but you can order 17 cookies if that is how many you need.</small></p>

                <label htmlFor="mini-cookies">Would you like to add 1 dozen mini-cookies?</label>
                <CustomSelect id="mini-cookies" name="mini-cookies">
                    <option hidden defaultValue> -Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="cake-topper">Would you like to add on a cake topper?</label>
                <CustomSelect id="cake-topper" name="cake-topper">
                    <option hidden defaultValue> -Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="individual">Do you need your cookies individually wrapped with a bow?</label>
                <CustomSelect id="individual" name="individual">
                    <option hidden defaultValue> -Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="design">What type of design are you interested in?</label>
                <CustomText id="design" name="design" rows="4" />
                <p><small>Be detailed.  What shape of cookies, colors, vibe, style, a name, specific animal, year etc.?</small></p>

                <label htmlFor="event">Are these cookies for an event?</label>
                <CustomSelect id="event" name="event">
                    <option hidden defaultValue> -Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="event-name">What kind of event is it?</label>
                <FormInput type="text" id="event-name" name="event-name" />

                <label htmlFor="pick-up">Are you able to pick-up your order in Sequim, WA?</label>
                <CustomSelect id="pick-up" name="pick-up">
                    <option hidden defaultValue> -Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="photos">Add any inspirational photos here:</label>
                <FormInput type="file" id="photos" name="photos" />
                <FormInput type="file" id="photos" name="photos" />
                <FormInput type="file" id="photos" name="photos" />

                <FormButton type="submit">Bake</FormButton>

            </form>

        </FormContainer>
    )
}

export default CustomForm;
