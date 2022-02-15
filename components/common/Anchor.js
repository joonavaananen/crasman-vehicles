import styled, { css } from 'styled-components';

const OverflowStyle = css`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
  }
`;

const Anchor = styled.a`
  color: unset;
  text-decoration: none;

  ${({ overflow }) => overflow && OverflowStyle}
`;

export { Anchor };
