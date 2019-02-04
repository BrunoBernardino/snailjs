import request from 'supertest';
import server from 'index.js';

test('/server', async () => {
  const response = await request(server.callback()).get('/server');
  expect(response).toBeDefined();

  expect(response.status).toEqual(200);
  expect(response.body).toMatchSnapshot();
});
