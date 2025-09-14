const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.json("Devops Course");
})

app.listen(3000, () => {
    console.log(`App listens in the port 3000`);
})