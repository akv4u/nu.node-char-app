const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname + './../public');
const port = process.env.PORT || 3002;

const app = express();

app.use(express.static(publicPath));

app.listen(port, () => console.log(`App started on port ${port}`));
