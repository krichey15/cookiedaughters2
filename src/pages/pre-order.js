import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import ProductGrid from '~/components/ProductGrid';
import LogoThree from '../components/LogoThree';

const PreOrderPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="Pre-Order" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <LogoThree />
        <ProductGrid />
    </>
)

export default PreOrderPage