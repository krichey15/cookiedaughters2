import React from 'react';
import Helmet from 'react-helmet';

// import SEO from '~/components/seo';
import Banner from '../components/Banner';
import LogoThree from '../components/LogoThree';
import About from '../components/About'

const IndexPage = () => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    </Helmet>
    <LogoThree />
    <Banner />
    <About />
  </div>
)

export default IndexPage