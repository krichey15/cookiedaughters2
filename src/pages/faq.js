import React from 'react';
// import { Link } from 'gatsby'
import Helmet from 'react-helmet';

import SEO from '~/components/seo';

const FaqPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <h1>FAQ</h1>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
    </>
)

export default FaqPage;