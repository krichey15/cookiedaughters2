import React from 'react'
import ThanksText from '../components/SiteText/ThanksText';

class Thanks extends React.Component {
  constructor(props) {
    super(props)
  }

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