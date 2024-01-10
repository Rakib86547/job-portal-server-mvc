const express = require('express');
const app = express()
const cors = require('cors');

app.use(express.json());
// app.use(cors());
const corsConfig = {
    origin: '',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(corsConfig))
app.options("", cors(corsConfig))

const jobsRoute = require('./routes/v1/jobs.routes');
const categoryRoute = require('./routes/v1/category.route');
const userRoute = require('./routes/v1/user.route');
const profileRoute = require('./routes/v1/profile.route')
const fileRoute = require('./routes/v1/files.route')
const personalRoute = require('./routes/v1/personal.route')
const educationRoute = require('./routes/v1/education.route')
const workRoute = require('./routes/v1/work.route')
const companyRoute = require('./routes/v1/companyInfo.route')
const skillRoute = require('./routes/v1/skill.route')
const searchRoute = require('./routes/v1/search.routes');
const featureJobsRoute = require('./routes/v1/featureJobs.route');


app.get('/', (req, res) => {
    res.send('Route is Working Yah!')
});


app.use('/api/v1/jobs', jobsRoute)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/profile', profileRoute)
app.use('/api/v1/file', fileRoute)
app.use('/api/v1/personal', personalRoute)
app.use('/api/v1/education', educationRoute)
app.use('/api/v1/work', workRoute)
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/skill', skillRoute);
app.use('/api/v1/search', searchRoute);
app.use('/api/v1/feature-jobs', featureJobsRoute)

module.exports = app;