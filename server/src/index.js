const express  = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRoutes = require("../src/routes/index")

const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(cors());

app.use(indexRoutes);

app.listen(process.env.PORT, () => {
 console.log(`app running on ${process.env.PORT}`)
  });