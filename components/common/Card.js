import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.vader};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  padding: 1.6rem;
`;

export { Card, CardContent };
