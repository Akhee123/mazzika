const express = require('express');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

connectDb();
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use('/api/song', require('./routes/songRoutes'));
server.use('/api/users', require('./routes/userRoutes'));
server.use(errorHandler);

server.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
