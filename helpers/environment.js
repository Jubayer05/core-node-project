/*
 * Title: Environments
 * Description: Handles environment configuration
 * Author: Jubayer Ahmed
 * Date: 15 June, 2023
 *
 */

// scaffolding
const environment = {};

environment.staging = {
  port: 3000,
  envName: 'staging',
};

environment.production = {
  port: 5000,
  envName: 'production',
};

// determine which environment was passed
const currentEnvironment =  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export the corresponding environment object
const environmentToExport =  typeof environment[currentEnvironment] === 'object'
    ? environment[currentEnvironment]
    : environment.staging;
// export the module
module.exports = environmentToExport;
