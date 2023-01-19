const ZingMp3 = require("./modules/ZingMp3");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/home", async (_, res) => {
    const data = await ZingMp3.getHome(1);
    res.json(data);
});

app.get("/radio", async (_, res) => {
    const data = await ZingMp3.getRadio(1);
    res.json(data);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = ZingMp3;
