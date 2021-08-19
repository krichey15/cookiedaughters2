import React from 'react';
import { CustomSelect, CustomText, FormButton, FormContainer, FormInput } from './CustomFormElements';

const CustomForm = () => {

    const addTwoWeeks = function () {

        let today = new Date();
        today.setDate(today.getDate() + 14);

        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;
        console.log(today)
        return today;
    }

    return (
        <FormContainer>
            <form name="contact" method="POST" encType="multipart/form-data" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <label htmlFor="name">Name: </label>
                <FormInput type="text" id="name" name="name" required />

                <label htmlFor="company">Company(if applicable): </label>
                <FormInput type="text" id="company" name="company" />

                <label htmlFor="email">Email: </label>
                <FormInput type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone: </label>
                <FormInput type="tel" id="phone" name="phone" placeholder="123-456-7890" />

                <label htmlFor="date">Pick-Up Date:</label>
                <FormInput type="date" id="date" name="date" min={addTwoWeeks()} required />
                <p><small>Not the day of the event - usually 1 or 2 days before.  What day do you need to be holding your cookies?</small></p>

                <label htmlFor="cookie-count">How many cookies would you like to order?</label>
                <FormInput type="number" id="cookie-count" name="cookie-count" min="24" max="100000" placeholder="24" required />
                <p><small>Minimum order is 2 dozen.</small></p>

                <label htmlFor="mini-cookies">Would you like to add 1 dozen mini-cookies?</label>
                <CustomSelect id="mini-cookies" name="mini-cookies" defaultValue="-Y or N-">
                    <option disabled value="-Y or N-">-Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="design">What type of design are you interested in?</label>
                <CustomText id="design" name="design" rows="4" required />
                <p><small>Give me all the details!  What shape of cookies, colors, vibe, style, a name, specific animal, year etc.?</small></p>

                <label htmlFor="event">Are these cookies for an event?</label>
                <CustomSelect id="event" name="event" defaultValue="-Y or N-">
                    <option disabled value="-Y or N-">-Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="event-name">What is the event?</label>
                <FormInput type="text" id="event-name" name="event-name" />

                <label htmlFor="pick-up">Are you able to pick-up your order in Sequim, WA?</label>
                <CustomSelect id="pick-up" name="pick-up" defaultValue="-Y or N-" required>
                    <option disabled value="-Y or N-">-Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>

                <label htmlFor="washington">If "No" and you need cookies shipped, are you located in Washington state?</label>
                <CustomSelect id="washington" name="washington" defaultValue="-Y or N-">
                    <option disabled value="-Y or N-">-Y or N-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </CustomSelect>
                <p><small>I am only able to ship within the state of Washington.</small></p>


                <label htmlFor="photos">Add any inspirational photos here:</label>
                <FormInput type="file" id="photos" name="photos" placeholder="Upload Photo" accept="image/*,.pdf" />
                <FormInput type="file" id="photos2" name="photos2" placeholder="Upload Photo" accept="image/*,.pdf" />
                <FormInput type="file" id="photos3" name="photos3" placeholder="Upload Photo" accept="image/*,.pdf" />
                <br />

                <FormButton type="submit">Bake</FormButton>

            </form>

        </FormContainer>
    )
}

export default CustomForm;
