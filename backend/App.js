const express = require('express');
const cors = require('cors');  // <-- add this
const { connectDB } = require('./config/db');

const app = express();

app.use(cors());  // <-- enable CORS for all origins (you can customize if needed)
app.use(express.json()); // Middleware to parse JSON request body

const studentRoutes = require('./routes/student');
const recruiterRoutes = require('./routes/recruiterRoutes');
const testSetupRoutes = require('./routes/testSetup');

app.use('/api/students', studentRoutes);
app.use('/recruiter', recruiterRoutes);
app.use('/test-setup', testSetupRoutes);

module.exports = app;

if (require.main === module) {
    connectDB()
    .then(() => {
        console.log('MongoDB databases connected...');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });
}
