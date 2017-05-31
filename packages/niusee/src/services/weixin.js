import { request } from '../utils/';

export function query(values) {
  return request('/api/vedio')
}
export function gallery(values) {
  return request('/api/gallery')
}
