import React from 'react';
import Helmet from 'react-helmet';

// import SEO from '~/components/seo';
import ContactForm from '../components/Contact';
import LogoThree from '../components/LogoThree';

const ContactPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} /> */}
        </Helmet>
        <LogoThree />
        <ContactForm />
    </>
)

export default ContactPage;