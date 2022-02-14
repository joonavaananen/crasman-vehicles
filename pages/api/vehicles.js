import { getVehicles } from '../../lib';

const handler = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');

  const data = await getVehicles();

  res.status(200).json(data);
};

export default handler;
