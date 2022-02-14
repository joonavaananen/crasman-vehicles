import styled from 'styled-components';

const Picture = styled.picture`
  position: relative;
  display: block;
  padding-bottom: ${({ aspectRatio }) =>
    aspectRatio ? `calc(100% / ${aspectRatio})` : '0'};
`;

export { Picture };
