// import useSWR from 'swr';
import { VehicleListPage } from '../../components';
import { getVehicles } from '../../lib';

const VehicleListPageContainer = ({ data }) => {
  // const { page } = fallbackData;
  // const { data } = useSWR(`/api/vehicles?page=${page}`, { fallbackData });

  return <VehicleListPage {...data} />;
};

const getStaticPaths = async () => {
  const { pageCount } = await getVehicles();

  const paths = Array.from({ length: pageCount }, (_, index) => ({
    params: { page: `${index + 1}` },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

const getStaticProps = async ({ params }) => {
  const { page } = params;
  const data = page > 0 ? await getVehicles({ page }) : null;

  if (!data?.vehicles?.length && page != 1)
    return {
      redirect: {
        destination: '/',
        statusCode: 303,
      },
    };

  return {
    props: { data },
    revalidate: 60,
  };
};

export default VehicleListPageContainer;

export { getStaticPaths, getStaticProps };
