import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import Cart from '../components/Cart';

const AboutPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <h1>About</h1>
    </>
)

export default AboutPage;