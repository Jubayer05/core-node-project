/*
 * Title: Handle Request Response
 * Description: Handle a request and response
 * Author: Jubayer Ahmed
 * Date: 13 June, 2023
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const routes = require('../routes');

// Module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/|\/$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObj = req.headers;

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObj,
  };

  // create a new instance of StringDecoder
  const decoder = new StringDecoder('utf-8');
  let realData = '';

  const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();

    chosenHandler(requestProperties, (statusCodeData, payloadData) => {
      let statusCode = statusCodeData;
      let payload = payloadData;
      statusCode = typeof statusCode === 'number' ? statusCode : 500;
      payload = typeof payload === 'object' ? payload : {};

      const payloadString = JSON.stringify(payload);

      // Set the content type in the response headers
      res.setHeader('Content-Type', 'application/json');

      // return the final response
      res.writeHead(statusCode);
      res.end(payloadString);
    });
  });
  // response handle
};

module.exports = handler;
