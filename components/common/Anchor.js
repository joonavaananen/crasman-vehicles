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

  ${({ overflowing }) => overflowing && OverflowStyle}
`;

export { Anchor };
