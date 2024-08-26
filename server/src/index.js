const express  = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const indexRoutes = require("../src/routes/index")
const path = require('path');


const BASE_URL = "/api/v1"
const app = express();
app.use(express.json());
dotenv.config();

app.use(morgan("dev"));
app.use(cors());

app.use(BASE_URL,indexRoutes);

if(process.env.NODE_ENV == 'dev'){
app.listen(process.env.PORT, () => {
 console.log(`app running on ${process.env.PORT} with ${process.env.NODE_ENV} mode`)
  });
}else{
    // Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler for any request that doesn’t match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
const PORT = 8000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}