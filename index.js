const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.json("Our build will succeed!");
});

app.listen(PORT, () => {
    console.log('Your server is running on PORT:',PORT);
});