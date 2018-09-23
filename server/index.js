const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3030;

const server = express();
const router = express.Router();

server.use(cors());
server.use(
  '/businesses/:id',
  express.static(path.join(__dirname, '../public')),
);
server.use('/api/businesses', router);

server.get('/businesses/:id/images', (req, res) => {
  res.redirect(`http://18.188.153.185:3000/images-service/${req.params.id}`);
});

server.get('/businesses/:id/reviews', (req, res) => {
  res.redirect(`http://52.55.139.226:80/reviews-service/${req.params.id}`);
});

server.get('/businesses/:id/restaurantInfo', (req, res) => {
  res.redirect(
    `http://35.183.134.103:80/restaurantInfo-service/${req.params.id}`,
  );
});

router.all('/:id/images*', (req, res) => {
  res.redirect(307, `http://18.188.153.185:3000${req.url}`);
});

router.all('/:id/reviews*', (req, res) => {
  res.redirect(307, `http://52.55.139.226:80${req.url}`);
});

router.all('/:id/restaurantInfo*', (req, res) => {
  res.redirect(307, `http://35.183.134.103:80${req.url}`);
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
