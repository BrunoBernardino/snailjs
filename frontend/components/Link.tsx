import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { css } from 'utils/constants';

const StyledLink = styled(Link)`
  color: ${css.blue};

  &:hover,
  &:active,
  &:focus {
    color: ${css.green};
  }
`;

const StyledAnchor = styled.a`
  color: ${css.blue};

  &:hover,
  &:active,
  &:focus {
    color: ${css.green};
  }
`;

type Props = {
  to?: string;
  href: string;
  children: ReactNode;
  className?: string;
};

const LinkWrapper = ({ to, href, children, className }: Props) => (
  <>
    {to && (
      <StyledLink to={to} href={href} className={className}>
        {children}
      </StyledLink>
    )}
    {!to && (
      <StyledAnchor href={href} className={className}>
        {children}
      </StyledAnchor>
    )}
  </>
);

LinkWrapper.defaultProps = {
  className: '',
  to: '',
};

export default LinkWrapper;
