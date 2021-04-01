import React from 'react';
import Helmet from 'react-helmet';

// import SEO from '~/components/seo';
import ProductGrid from '~/components/ProductGrid';
import Announcement from '../components/Announcement';
import LogoThree from '../components/LogoThree';

const PreOrderPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <SEO title="Cookies" keywords={[`gatsby`, `application`, `react`]} /> */}
        </Helmet>
        <Announcement />
        <LogoThree />
        <ProductGrid />
    </>
)

export default PreOrderPage