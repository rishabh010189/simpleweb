const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('hello from express');
});

app.listen(8080, () => {
    console.log('Listening on port 8080')
})