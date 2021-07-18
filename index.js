const express = require('express');
const parseResponse = require('./parseResponse');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

parseResponse(app);
routes(app);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})