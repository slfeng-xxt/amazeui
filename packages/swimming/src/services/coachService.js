
import request from '../utils/request';
const baseURL = '';

export async function fetchCoach(id) {
  return request(`${baseURL}/swim/pools/public/${id}`);
}
export async function fetchTrainList(id) {
  return request(`${baseURL}/swim/pools/public/trains/${id}`);
}
