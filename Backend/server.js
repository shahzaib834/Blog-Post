const express = require('express');
const dotenv = require('dotenv');
const blogRoutes = require('./Routes/BlogRoutes');
const authorRoutes = require('./Routes/authorRoutes');
const connectDB = require('./Config/db');
const addDataToDatabase = require('./seeder');

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use('/api/blogs', blogRoutes);
app.use('/api/authors', authorRoutes);

// Seeder to add fake data to the app.
// addDataToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
