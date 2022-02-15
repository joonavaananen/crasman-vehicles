import styled from 'styled-components';
import { Page, Header, PrimaryHeading, Main, Pagination } from './common';
import { VehicleList } from './vehicle-list-page';

const StyledPrimaryHeading = styled(PrimaryHeading)`
  margin-bottom: 2rem;
`;

const VehicleListPage = ({ totalCount, vehicles, page, pageCount }) => (
  <Page>
    <Header>
      <StyledPrimaryHeading>{`${totalCount} vehicles found`}</StyledPrimaryHeading>
    </Header>
    <Main>
      <VehicleList vehicles={vehicles} />
      <Pagination page={page} pageCount={pageCount} />
    </Main>
  </Page>
);

export { VehicleListPage };
