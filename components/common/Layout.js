import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: ${({ theme }) => theme.breakpoint.xl};
  margin: 0 auto;
  padding: 2rem;
`;

export { Layout };
