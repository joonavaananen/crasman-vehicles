import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Link from 'next/link';

const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Anchor = styled.a`
  display: flex;
  color: unset;
`;

const Pages = styled.span``;

const PaginationContainer = ({ page = 1, pageCount = 1, pathname = '' }) => (
  <Pagination>
    {page - 1 ? (
      <Link href={{ pathname: `${pathname}/${page - 1}` }} passHref>
        <Anchor aria-label={'Previous page'}>
          <ChevronLeft />
        </Anchor>
      </Link>
    ) : null}
    <Pages>{`Page ${page} / ${pageCount}`}</Pages>
    {page + 1 <= pageCount ? (
      <Link href={{ pathname: `${pathname}/${page + 1}` }} passHref>
        <Anchor aria-label={'Next page'}>
          <ChevronRight />
        </Anchor>
      </Link>
    ) : null}
  </Pagination>
);

export { PaginationContainer as Pagination };
