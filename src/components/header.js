import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styled from 'styled-components'
import { Container } from '../syledComponents/layout'

const HeaderContainer = styled.header`
  ${ props => props.background }
  margin-bottom: 1.4rem
`

const Heading1 = styled.h1`
  margin: 0
`

const StyledLink = styled(Link)`
  color: white
  text-decoration: none
`

const BACKGROUND = 'background-color: #20232a'

const Header = ({ background, siteTitle }) => (
  <HeaderContainer background={background}>
    <Container>
      <Heading1>
        <StyledLink to='/'>{siteTitle}</StyledLink>
      </Heading1>
    </Container>
  </HeaderContainer>
)

Header.defaultProps = {
  background: BACKGROUND,
  siteTitle: `Polling App`,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  background: PropTypes.string,
}

export default Header
