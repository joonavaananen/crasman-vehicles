import { getPlaiceholder } from 'plaiceholder';
import { fetcher } from '../utils';
import { Vehicle } from '../classes';

const { CMS_BASE_URL, VEHICLE_PAGE_SIZE = 20 } = process.env;

const getVehicle = async (registrationNumber) => {
  const data = await fetcher(
    `https://${CMS_BASE_URL}/stage-ajax/vehicles?registration_number=${registrationNumber}`
  );

  if (!data?.vehicles?.length) return {};

  const vehicle = new Vehicle(data.vehicles[0]);

  if (vehicle.image) vehicle.image = await getPlaceholder(vehicle.image);

  return { ...vehicle };
};

const getVehicles = async ({ page, pageSize }) => {
  page = parseInt(page) || 1;
  pageSize = parseInt(pageSize) || VEHICLE_PAGE_SIZE;

  const data = await fetcher(
    `https://${CMS_BASE_URL}/stage-ajax/vehicles?page=${page}&page_size=${pageSize}`
  );

  // Return fallback data on error
  if (!data)
    return { vehicles: [], totalCount: 0, page, pageSize, pageCount: 0 };

  // Format vehicle data for UI
  const vehicles = await Promise.all(
    data.vehicles?.map(async (vehicle) => {
      vehicle = new Vehicle(vehicle);

      // Get placeholder for image
      if (vehicle.image) vehicle.image = await getPlaceholder(vehicle.image);

      return { ...vehicle };
    }) || []
  );

  return {
    vehicles,
    totalCount: data.total_count,
    page,
    pageSize,
    pageCount: data.total_count / pageSize,
  };
};

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

export { getVehicle, getVehicles };
