import React from 'react';
import Helmet from 'react-helmet';

// import SEO from '~/components/seo';
import Banner from '../components/Banner';
// import ImageSlider from '../components/ImageSlider';
// import { SliderData } from '../components/ImageSlider/SliderData';
import LogoThree from '../components/LogoThree';

const IndexPage = () => (
  <div>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    </Helmet>
    <LogoThree />
    {/* <ImageSlider slides={SliderData} /> */}
    <Banner />
  </div>
)

export default IndexPage