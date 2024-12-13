const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/imsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });