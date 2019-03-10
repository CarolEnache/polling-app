import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const HeaderContainer =  styled.header`
  ${props => props.background};
  margin-bottom: 1.4rem;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Heading1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const BACKGROUND = 'background-color: #20232a';

const Header = ({ background, siteTitle }) => (
  <HeaderContainer background={background}>
    <HeaderWrapper>
      <Heading1>
        <StyledLink to='/'>{siteTitle}</StyledLink>
      </Heading1>
    </HeaderWrapper>
  </HeaderContainer>
);

Header.defaultProps = {
  background: BACKGROUND,
  siteTitle: `Polling App`,
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  background: PropTypes.string,
};

export default Header;
