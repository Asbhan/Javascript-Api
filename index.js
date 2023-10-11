const express = require('express');
const app = express();
const PORT = 3000;

const routerName = require('./app');
app.use('/api', routerName);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});