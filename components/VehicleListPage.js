import styled from 'styled-components';
import { Page, Pagination } from './common';
import { VehicleList } from './vehicle-list-page';

const Header = styled.header``;

const Heading = styled.h1`
  margin-top: 0;
  color: ${({ theme }) => theme.color.maul};
`;

const Main = styled.main``;

const VehicleListPage = ({ totalCount, vehicles, page, pageCount }) => (
  <Page>
    <Header>
      <Heading>{`${totalCount} vehicles found`}</Heading>
    </Header>
    <Main>
      <VehicleList vehicles={vehicles} />
      <Pagination page={page} pageCount={pageCount} />
    </Main>
  </Page>
);

export { VehicleListPage };
