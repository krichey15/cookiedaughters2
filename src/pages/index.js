import React from 'react';
import Helmet from 'react-helmet';

import SEO from '~/components/seo';

const IndexPage = () => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Helmet>
  </>
)

export default IndexPage
