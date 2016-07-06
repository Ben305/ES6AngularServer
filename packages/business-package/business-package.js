// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See business-package-tests.js for an example of importing.
export const name = 'business-package';

import registerAngularService from './sampleService';

angular.module('business-service', [
  'angular-meteor']);

registerAngularService();

angular.bootstrap([
  'business-service'
]);