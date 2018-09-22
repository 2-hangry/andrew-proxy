const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT;

const server = express();
const router = express.Router();

server.use(cors());
server.use(
  '/businesses/:id',
  express.static(path.join(__dirname, '../public')),
);
server.use('/api/businesses', router);

router.all('/:id/images*', (req, res) => {
  res.redirect(307, `http://18.188.153.185:80${req.url}`);
});

router.all('/:id/reviews*', (req, res) => {
  res.redirect(307, `http://localhost:8080${req.url}`);
});

router.all('/:id/restaurantInfo*', (req, res) => {
  res.redirect(307, `http://35.183.134.103:80${req.url}`);
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
