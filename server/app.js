const express = require("express");
const cors = require("cors");

const bfhlRoute = require("./routes/bfhl.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bfhl", bfhlRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("BFHL API is running 🚀");
});