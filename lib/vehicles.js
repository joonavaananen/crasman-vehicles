import { fetcher } from '../utils';
import { getPlaceholder } from '../utils/server';
import { Vehicle } from '../classes';

const { CMS_BASE_URL, VEHICLE_PAGE_SIZE = 20 } = process.env;

const getVehicle = async (registrationNumber) => {
  const data = await fetcher(
    `${CMS_BASE_URL}/stage-ajax/vehicles?registration_number=${registrationNumber}`
  );

  if (!data?.vehicles?.length) return null;

  const vehicle = new Vehicle(data.vehicles[0]);

  if (vehicle.image) vehicle.image = await getPlaceholder(vehicle.image);

  return { ...vehicle };
};

const getVehicles = async ({ page = 1, pageSize = VEHICLE_PAGE_SIZE }) => {
  const data = await fetcher(
    `${CMS_BASE_URL}/stage-ajax/vehicles?page=${page}&page_size=${pageSize}`
  );

  if (!data) return null;

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

export { getVehicle, getVehicles };
