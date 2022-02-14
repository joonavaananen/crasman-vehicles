import { getPlaiceholder } from 'plaiceholder';
import { fetcher } from '../utils';
import { Vehicle } from '../classes';

const { CMS_BASE_URL, VEHICLE_PAGE_SIZE = 20 } = process.env;

const getVehicles = async (page = 1, pageSize = VEHICLE_PAGE_SIZE) => {
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

      // Try to get placeholder for image
      if (vehicle.image) {
        try {
          const { img, base64 } = await getPlaiceholder(vehicle.image);
          vehicle.image = { ...img, base64 };
        } catch ({ message }) {
          console.error(message);
          vehicle.image = { src: vehicle.image };
        }
      }

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

export { getVehicles };
