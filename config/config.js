/**
 * Created by Jyothi on 7/11/16.
 */

var environment = process.env.NODE_ENV || 'development';
//By default application will run in development environment

if (['development', 'test', 'staging', 'production'].indexOf(environment) == -1) {
  console.log(`Set environment to development or test or production`);
  process.exit(1);
}

console.log(`App running in ${environment} environment`);

var configuration = require(`../config/env/${environment}`);

module.exports = configuration;
