const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
const dataRoutes = require('./routes/dataRoutes');
app.use('/api/data', dataRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});