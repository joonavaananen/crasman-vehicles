import styled from 'styled-components';

const Picture = styled.picture`
  position: relative;
  display: block;
  padding-bottom: calc(100% / ${({ aspectRatio }) => aspectRatio});
`;

export { Picture };
