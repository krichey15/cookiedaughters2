import React from 'react'
import ThanksText from '../components/SiteText/ThanksText';

class Thanks extends React.Component {

  componentDidMount() {
    localStorage.clear();
  }

  render() {
    return (
      <>
        <ThanksText />
      </>
    )
  }
}

export default Thanks;