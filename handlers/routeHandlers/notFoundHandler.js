/*
 * Title: Not found handler
 * Description: 404 not found handler
 * Author: Jubayer Ahmed
 * Date: 12 June, 2023
 *
 */

// Module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: 'Not found!!!.',
  });
};

module.exports = handler;
