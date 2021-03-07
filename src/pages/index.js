import React from 'react';
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
  </>
)

export default IndexPage