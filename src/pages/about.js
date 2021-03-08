import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import Cart from '../components/Cart';
import LogoThree from '../components/LogoThree';
import AboutText from '../components/SiteText/AboutText';

const AboutPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <LogoThree />
        <AboutText />
    </>
)

export default AboutPage;