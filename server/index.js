const pool = require("./db");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = 5167;


app.listen(PORT, () => {
    console.log("Server is running on port 5167");
});