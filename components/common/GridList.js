import styled from 'styled-components';

const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const GridListItem = styled.li``;

export { GridList, GridListItem };
