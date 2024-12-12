const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/topup", (req, res) => {
    const { game, playerId, nominal } = req.body;
    if (!game || !playerId || !nominal) {
        return res.status(400).send({ message: "Data tidak lengkap" });
    }
    res.send({ message: `Top-Up untuk ${game} ID ${playerId} sebesar ${nominal} berhasil!` });
});

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));