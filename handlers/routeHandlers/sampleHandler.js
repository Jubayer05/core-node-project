/*
 * Title: Handle Sample Request
 * Description: Handle Sample Request
 * Author: Jubayer Ahmed
 * Date: 12 June, 2023
 *
 */

// Module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: 'This is a sample url from sample handler.',
  });
};

module.exports = handler;
