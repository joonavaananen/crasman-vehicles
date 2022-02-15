import styled, { useTheme } from 'styled-components';
import { GridList, GridListItem } from '../common';
import { VehicleCard } from './';

const StyledGridList = styled(GridList)`
  margin-bottom: 2rem;
`;

const VehicleList = ({ vehicles }) => {
  const theme = useTheme();

  // Estimate grid item width at different breakpoints for image sizing
  const sizes = [
    `${theme.condition.xs} 50vw`,
    `${theme.condition.md} calc(100vw / 3)`,
    `${theme.condition.xl} 20vw`,
    '100vw',
  ].join(', ');

  return (
    <StyledGridList>
      {vehicles.map((vehicle) => (
        <GridListItem key={vehicle.pid}>
          <VehicleCard {...vehicle} sizes={sizes} />
        </GridListItem>
      ))}
    </StyledGridList>
  );
};

export { VehicleList };
