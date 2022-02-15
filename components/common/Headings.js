import styled, { css } from 'styled-components';

const HeadingStyle = css`
  margin: 0;
  color: ${({ theme }) => theme.color.maul};
`;

const PrimaryHeading = styled.h1`
  ${HeadingStyle}
  font-size: 3.2rem;
`;

const SecondaryHeading = styled.h2`
  ${HeadingStyle}
  font-size: 2rem;
`;

export { PrimaryHeading, SecondaryHeading };
