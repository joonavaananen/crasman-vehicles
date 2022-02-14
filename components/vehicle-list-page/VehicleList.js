import styled, { useTheme } from 'styled-components';
import { VehicleCard } from './';

const VehicleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
  margin: 0 0 2rem 0;
  padding: 0;
  list-style: none;
`;

const VehicleListItem = styled.li``;

const VehicleListContainer = ({ vehicles }) => {
  const theme = useTheme();

  // Estimate grid item width at different breakpoints for image sizing
  const sizes = [
    `${theme.condition.xs} 50vw`,
    `${theme.condition.md} calc(100vw / 3)`,
    `${theme.condition.xl} 20vw`,
    '100vw',
  ].join(', ');

  return (
    <VehicleList>
      {vehicles.map((vehicle) => (
        <VehicleListItem key={vehicle.pid}>
          <VehicleCard {...vehicle} sizes={sizes} />
        </VehicleListItem>
      ))}
    </VehicleList>
  );
};

export { VehicleListContainer as VehicleList };
