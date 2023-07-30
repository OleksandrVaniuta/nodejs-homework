const mongoose = require('mongoose');
const app = require('./app');

const DB_HOST =
  'mongodb+srv://vaniutasa:G74SZWhzalv6wXhe@cluster0.ft08ttn.mongodb.net/db-contacts?retryWrites=true&w=majority';
// process.env

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
     app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
