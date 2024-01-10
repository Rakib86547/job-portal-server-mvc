const mongoose = require('mongoose');
const colors = require('colors');
const app = require('.');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    try {
        console.log('Database connection is success'.green.bold)
    } catch (error) {
        console.log(error.message, 'could not connect db'.red.bold)
    }
})



// Server
app.listen(port, () => {
    console.log(`server is running successfully on port ${port}`.yellow.bold)
})
