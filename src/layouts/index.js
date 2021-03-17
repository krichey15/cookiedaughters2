import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 66%;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation siteTitle={data.site.siteMetadata.title} toggle={toggle} />
            <Wrapper>
              {children}
            </Wrapper>
            <Footer/>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
