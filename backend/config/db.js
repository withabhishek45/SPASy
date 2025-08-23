const mongoose = require('mongoose');

const studentDB = mongoose.createConnection('mongodb+srv://ldplayer8987620:iSkJcT88RkYYfOUq@cluster0.rvkaqdh.mongodb.net/Student?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  // Removed tlsAllowInvalidCertificates to enforce valid certificates
});

const recruiterDB = mongoose.createConnection('mongodb+srv://ldplayer8987620:iSkJcT88RkYYfOUq@cluster0.rvkaqdh.mongodb.net/Recruiter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  // Removed tlsAllowInvalidCertificates to enforce valid certificates
});

const connectDB = async () => {
  try {
    await Promise.all([
      new Promise((resolve, reject) => {
        studentDB.once('open', resolve);
        studentDB.on('error', reject);
      }),
      new Promise((resolve, reject) => {
        recruiterDB.once('open', resolve);
        recruiterDB.on('error', reject);
      }),
    ]);
    console.log('Both MongoDB databases connected...');
  } catch (error) {
    throw error;
  }
};

module.exports = { connectDB, studentDB, recruiterDB };
