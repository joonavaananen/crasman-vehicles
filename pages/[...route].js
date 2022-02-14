import useSWR from 'swr';
import { VehicleListPage } from '../components';
import { getVehicles } from '../lib';

const Index = ({ data: fallbackData }) => {
  const { data } = useSWR('/api/vehicles', { fallbackData });

  return <VehicleListPage {...data} />;
};

const getStaticPaths = async () => {
  const { pageCount } = await getVehicles();

  return {
    paths:
      [] ||
      Array.from({ length: pageCount }, (_, index) => ({
        params: { route: [`${index + 1}`] },
      })),
    fallback: 'blocking',
  };
};

const getStaticProps = async ({ params }) => {
  let [page] = params.route;
  page = parseInt(page) || 1;

  const data = await getVehicles(page);

  return {
    props: { data },
    revalidate: 900,
  };
};

export default Index;

export { getStaticPaths, getStaticProps };
