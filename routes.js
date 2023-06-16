/*
 * Title: Handle Routes
 * Description: Handle Routes
 * Author: Jubayer Ahmed
 * Date: 15 June, 2023
 *
 */

// Dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');
// module scaffolding
const routes = {
  sample: sampleHandler,
  user: userHandler,
};

module.exports = routes;
