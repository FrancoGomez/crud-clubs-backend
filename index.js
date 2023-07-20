require('dotenv').config();

const app = require('./src/server');

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Starting server on port ${PORT}`));
