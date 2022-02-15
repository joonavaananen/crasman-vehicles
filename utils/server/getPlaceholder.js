import { getPlaiceholder } from 'plaiceholder';

const getPlaceholder = async (url) => {
  let image;

  try {
    const { img, base64 } = await getPlaiceholder(url);
    image = { ...img, base64 };
  } catch ({ message }) {
    console.error(message);
    image = { src: url };
  }

  return image;
};

export { getPlaceholder };
