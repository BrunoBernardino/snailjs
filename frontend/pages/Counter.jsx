// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { apiKey } from 'utils/constants';
import Link from 'components/Link';
import Button from 'components/Button';

const Title = styled.h1`
  font-weight: 300;
  font-size: 2.2em;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 2em auto;
`;

const LinkWrapper = styled.section`
  margin: 2em auto;

  a {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
`;

type Props = {
  match: {
    path: string,
    params: {
      counter?: string,
    },
  },
};

type State = {
  counter: number,
  isOnRoot: boolean,
};

export default class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const parseCounterInPath = parseInt(props.match.params.counter, 10);

    this.state = {
      counter: isNaN(parseCounterInPath) ? 0 : parseCounterInPath,
      isOnRoot: props.match.path === '/',
    };
  }

  onButtonClick = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    const { counter, isOnRoot } = this.state;

    const titlePrefix = counter > 0 ? `(${counter}) ` : '';

    return (
      <div className="Counter">
        <Helmet>
          <title>{`${titlePrefix}SnailJS - Slow and thoughtful development with Node and React`}</title>
        </Helmet>
        <Title>Welcome to SnailJS!</Title>
        <img alt="Logo" src="/static/logo.png" />
        <StyledButton type="button" onClick={this.onButtonClick}>
          This button has been clicked {counter} time{counter === 1 ? '' : 's'}!
        </StyledButton>
        <LinkWrapper>
          {isOnRoot && (
            <Link to="/6" href="/6">
              Start with 6 clicks
            </Link>
          )}
          {!isOnRoot && (
            <Link to="/" href="/">
              Go back to 0
            </Link>
          )}
          <Link href={`/server?apiKey=${apiKey}`}>Server-only route</Link>
          <Link href="https://github.com/BrunoBernardino/snailjs">GitHub</Link>
        </LinkWrapper>
      </div>
    );
  }
}
