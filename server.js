const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/play', require('./marcopolo'));

app.listen(PORT, () => {
    console.log(`server is up and listing on port ${PORT}`);
});

module.exports = app;
