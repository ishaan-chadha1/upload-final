const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

app.use(cors('*')); // Adjust the CORS policy as needed for your deployment
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

module.exports = app;


// Add this to the end of your server.js for local development only
// const port = process.env.PORT || 8080;
// if (process.env.NODE_ENV !== 'production') {
//   app.listen(port, () => {
//     console.log(`Running at localhost:${port}`);
//   });
// }

