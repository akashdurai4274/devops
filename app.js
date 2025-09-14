const express = require('express')
const app = express();
const PORT = process.env.PORT ||| 3000;

app.get("/", (req, res) => {
    res.json("Devops Course");
})

app.listen(PORT, () => {
    console.log(`App listens in the port PORT`);
})