const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const name = "Akasj"
app.get("/", (req, res) => {
    res.send(`Welcome to the Devops Course ${name}`);
})

const server = app.listen(PORT, () => {
    console.log(`App listens in the port PORT`);
})

module.exports = { app, server, name }