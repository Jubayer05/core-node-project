/*
 * Title: Handle User Requests
 * Description: Handle User Requests
 * Author: Jubayer Ahmed
 * Date: 15 June, 2023
 *
 */

// Module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  callback(200, {
    message: 'This is user handler',
  });
};

module.exports = handler;
