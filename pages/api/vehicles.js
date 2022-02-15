import { getVehicles } from '../../lib';

const handler = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');
  const { page } = req.query;

  if (page <= 0) return res.status(400).send({ message: 'Bad Request' });

  const data = await getVehicles({ page });
  res.status(200).json(data);
};

export default handler;
