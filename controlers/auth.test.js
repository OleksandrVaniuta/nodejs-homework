// const request = require('supertest');
// const app = require('../app');
// // const Auth = require('./auth');
// // const mockingoose = require('mockingoose');
// // const { User } = require('../models/user');
// const mongoose = require('mongoose');
// let server;
// mongoose.set('strictQuery', true);

// const DB_HOST =
//   'mongodb+srv://vaniutasa:G74SZWhzalv6wXhe@cluster0.ft08ttn.mongodb.net/db-contacts?retryWrites=true&w=majority';

// describe('POST/api/auth/login', () => {
//   beforeAll(async () => {
//     mongoose
//       .connect(DB_HOST)
//       .then(() => {
//         console.log('Database connection successful');
//         server = app.listen(3000, () => {
//           console.log('Server running. Use our API on port: 3000');
//         });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         process.exit(1);
//       });
//   });

//   afterAll(async () => {
//     if (server) {
//       await new Promise((resolve) => server.close(resolve));
//       console.log('Server has been closed.');
//     }
//   }, 15000);

//   it('POST /login , should return the successfully', async () => {
//     const testUser = {
//       email: 'tost@mail.com',
//       password: '11112222',
//     };

//     return request(app)
//       .post('/api/auth/login')
//       .send(testUser)
//       .expect(200)
//       .then((res) => {
//         console.log(res.body.token);
//         expect(typeof res.body.user.email).toBe('string');
//         expect(typeof res.body.user.subscription).toBe('string');
//       }, 10000);
//   });
// });
