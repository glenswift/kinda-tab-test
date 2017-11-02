import request from 'axios';

export async function fetchConfig() {
  const res = await request.get('/fake-backend/tabs-configuration.json');
  return res.data;
}
