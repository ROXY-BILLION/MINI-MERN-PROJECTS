require("dotenv").config();

const app = require("./config/server");

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});