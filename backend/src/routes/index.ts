import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({
    message:
      'Basic template for typescript with eslint, prettier and editorconfig!',
  }),
);

export default routes;
