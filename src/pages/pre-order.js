import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import ProductGrid from '~/components/ProductGrid';

const PreOrderPage = () => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <SEO title="Pre-Order" keywords={[`gatsby`, `application`, `react`]} />
        </Helmet>
        <ProductGrid />
    </>
)

export default PreOrderPage