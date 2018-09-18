const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3030;

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname, '../public')));

server.listen(port, () => {
  console.log('listening on 3030');
});
