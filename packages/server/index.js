const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from serer');
})

app.listen(5000, () => console.log('server started on port 5000'));


