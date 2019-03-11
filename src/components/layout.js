/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import { Container } from '../syledComponents/layout';

import './layout.css';

const BaseContainerStyles = styled(Container)`
  padding-top: 0;
`;

const Layout = ({ children }) => (
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header
          siteTitle={data.site.siteMetadata.title}
          background='
            background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)'
        />
        <BaseContainerStyles>
          <main>{children}</main>
        </BaseContainerStyles>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,

};

export default Layout;
