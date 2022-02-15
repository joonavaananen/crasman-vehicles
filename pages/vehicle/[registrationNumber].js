import { VehiclePage } from '../../components';
import { getVehicles, getVehicle } from '../../lib';

const Index = ({ data }) => <VehiclePage {...data} />;

const getStaticPaths = async () => {
  const { vehicles } = await getVehicles({ page: -1 });

  const paths = vehicles.map((vehicle) => ({
    params: { registrationNumber: vehicle.registration_number },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

const getStaticProps = async ({ params }) => {
  const { registrationNumber } = params;
  const data = await getVehicle(registrationNumber);

  if (!data) return { notFound: true };

  return {
    props: { data },
    revalidate: 60,
  };
};

export default Index;

export { getStaticPaths, getStaticProps };
