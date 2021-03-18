import React from 'react';
import Helmet from 'react-helmet';
// import SEO from '~/components/seo';
import CustomForm from '../components/CustomForm'
import LogoThree from '../components/LogoThree';
import FormText from '../components/SiteText/FormText';

const CustomOrderPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <SEO title="Custom Order" keywords={[`gatsby`, `application`, `react`]} /> */}
        </Helmet>
        <LogoThree />
        <FormText />
        <CustomForm />
    </>
)

export default CustomOrderPage;