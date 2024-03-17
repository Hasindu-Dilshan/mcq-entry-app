const express = require('express');
const { StatusCodes } = require('http-status-codes');
const mcqRoute = require('./mcq.route');
const authRoute = require('./auth.route');

const router = express.Router();

const routes = [
  {
    path: '/mcq',
    route: mcqRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});
router.use('/', (req, res) =>
  res
    .status(StatusCodes.OK)
    .json({ message: 'A request came from universe to /api/v1' })
);

module.exports = router;
