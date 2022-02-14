import useSWR from 'swr';
import { VehicleListPage } from '../components';
import { getVehicles } from '../lib';

const Index = ({ data: fallbackData }) => {
  const { page } = fallbackData;
  const { data } = useSWR(`/api/vehicles?page=${page}`, { fallbackData });

  return <VehicleListPage {...data} />;
};

const getStaticPaths = async () => {
  const { pageCount } = await getVehicles({ page: -1 });

  const paths = Array.from({ length: pageCount }, (_, index) => ({
    params: { route: [`${index + 1}`] },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

const getStaticProps = async ({ params }) => {
  const [page] = params.route;
  const data = await getVehicles({ page });

  return {
    props: { data },
    revalidate: 900,
  };
};

export default Index;

export { getStaticPaths, getStaticProps };
