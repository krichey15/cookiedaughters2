import React from 'react';
// import { Link } from 'gatsby'
import Helmet from 'react-helmet';

import SEO from '~/components/seo';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/ImageSlider/SliderData';

const IndexPage = () => (
  <>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Helmet>
    <ImageSlider slides={SliderData} />

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage