import request from 'supertest';
import app, { server } from 'index.js';

test('/server', async () => {
  const response = await request(app.callback()).get('/server');
  expect(response).toBeDefined();

  expect(response.status).toEqual(200);
  expect(response.body).toMatchSnapshot();

  const serverHandler = await server;
  await serverHandler.close();
});
