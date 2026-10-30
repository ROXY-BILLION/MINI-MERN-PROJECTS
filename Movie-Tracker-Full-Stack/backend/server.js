require("dotenv").config();
const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/movies", movieRoutes);


const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
