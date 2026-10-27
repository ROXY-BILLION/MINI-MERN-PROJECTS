require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(express.json());
app.use("/api/notes", noteRoutes);


const PORT = process.env.PORT || 5001;

async function startServer() {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("failed to start server:", error.message);
    }
}

startServer();
