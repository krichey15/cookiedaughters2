import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import Sidebar from '../components/Sidebar'

const Wrapper = styled.div`
  max-width: 100%;
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
              <footer>
                © {new Date().getFullYear()} Cookie Daughters, Built by
                {` `}
                <a href="https://www.kyle-richey.com">Kyle Richey</a>
              </footer>
            </Wrapper>
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
