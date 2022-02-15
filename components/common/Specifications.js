import styled from 'styled-components';

const Specifications = styled.ul`
  display: flex;
  gap: 1.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Specification = styled.li`
  color: ${({ theme }) => theme.color.vader};
`;

const SpecificationsContainer = ({ specifications }) => (
  <Specifications>
    {specifications.map((specification, index) => (
      <Specification key={index}>{specification}</Specification>
    ))}
  </Specifications>
);

export { SpecificationsContainer as Specifications };
