import { Page, Main } from './common';
import { VehicleCard } from './vehicle-page';

const VehiclePage = (props) => (
  <Page>
    <Main>
      <VehicleCard {...props} />
    </Main>
  </Page>
);

export { VehiclePage };
