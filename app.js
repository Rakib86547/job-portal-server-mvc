const express = require('express');
const app = express()
const cors = require('cors');


// -----Middleware----
app.use(express.json());
app.use(cors());

const jobsRoute = require('./routes/v1/jobs.routes');
const categoryRoute = require('./routes/v1/category.route');
const userRoute = require('./routes/v1/user.route');
const { errorHandler } = require('./middleware/errorHandler');

app.get('/', (req, res) => {
    res.send('Route is Working Yah!')
});

app.use(errorHandler)

// -----routes-----
app.use('/api/v1/jobs', jobsRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/user', userRoute)

module.exports = app;