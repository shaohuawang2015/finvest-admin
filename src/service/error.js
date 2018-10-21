import request from '@/util/request';

export default async function queryError(code) {
  return request(`/api/${code}`);
}
