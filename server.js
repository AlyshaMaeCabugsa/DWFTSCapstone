const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.')); // Serve static files from the root directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
