// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

import { css } from 'utils/constants';

const StyledButton = styled.button`
  margin: 1em auto;
  padding: 1em 1.5em;
  font-size: 1.2em;
  border: none;
  border-radius: 3px;
  color: white;
  background: ${css.blue};

  &:hover,
  &:active,
  &:focus {
    background: ${css.green};
  }
`;

type Props = {
  onClick: () => void,
  type: string,
  children: Node,
  className?: string,
};

const Button = ({ onClick, type, children, className }: Props) => (
  <StyledButton onClick={onClick} type={type} className={className}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  className: '',
};

export default Button;
