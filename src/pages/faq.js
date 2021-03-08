import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import LogoThree from '../components/LogoThree';

const FaqPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="FAQ" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <LogoThree />
    </>
)

export default FaqPage;