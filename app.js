const express = require('express');
const app = express()
const cors = require('cors');
// const errorHandler = require('./middleware/errorHandler');

// -----Middleware----
app.use(express.json());
app.use(cors());
// app.use(errorHandler)
const jobsRoute = require('./routes/v1/jobs.routes');
const categoryRoute = require('./routes/v1/category.route');
const userRoute = require('./routes/v1/user.route');
const profileRoute = require('./routes/v1/profile.route')
// const applyRoute = require('./routes/v1/apply.route')


app.get('/', (req, res) => {
    res.send('Route is Working Yah!')
});



// -----routes-----
app.use('/api/v1/jobs', jobsRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/profile', profileRoute)
// app.use('/api/v1/apply', applyRoute)

module.exports = app;