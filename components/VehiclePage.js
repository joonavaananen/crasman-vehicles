import styled from 'styled-components';
import { Page, Main } from './common';
import { VehicleCard } from './vehicle-list-page';

const StyledVehicleCard = styled(VehicleCard)`
  flex-direction: column-reverse;
  flex-grow: 1;

  > picture {
    flex-grow: 1;
    padding-bottom: 0;
  }
`;

const VehiclePage = (props) => (
  <Page>
    <Main>
      <StyledVehicleCard {...props} />
    </Main>
  </Page>
);

export { VehiclePage };
