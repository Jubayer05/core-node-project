/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful api to monitor up or down time of user defined links
 * Author: Jubayer Ahmed
 * Date: 15 June, 2023
 *
 */

// dependencies
const http = require('http');
const handler = require('./helpers/handleReqRes');
const environment = require('./helpers/environment');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// TODO: Delete it latter testing file system now
// data.create('test', 'newFile', { name: 'Bangladesh' }, (err) => {
//   console.log(`Error was: ${err}`);
// });

// TODO: Delete it latter testing file system now
// data.read('test', 'newFile', (err, data) => {
//   // console.log(`Error was: ${err}`);
//   // console.log(`Data: ${data}`);
// });

// update the data
// data.update('test', 'newFile', { name: 'Jubayer Ahmed', age: 23 }, (err) => {
//   console.log(`Error was: ${err}`);
// });

// data.delete('test', 'newFile', (err) => {
//   console.log(`Error was: ${err}`);
// });

// create server
app.createServer = () => {
  const server = http.createServer(handler.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Listening on port ${environment.port}`);
  });
};

// start the server
app.createServer();
