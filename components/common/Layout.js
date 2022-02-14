import styled from 'styled-components';

const Layout = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xl};
  margin: 0 auto;
  padding: 2rem;
`;

export { Layout };
