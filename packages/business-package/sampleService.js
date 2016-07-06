class SampleService {
  constructor() {
    console.log('SampleService.constructor');
  }

  testFunction() {
    console.log('SampleService.testFunction was called');
    return 'This is the server result';
  }
}

export default function registerAngularService() {
  angular
    .module('business-service')
    .service('sampleService', SampleService)
    .config(registerSampleService);
}

function registerSampleService(ServerAPIProvider) {
  'njInject';
  ServerAPIProvider.register('sampleService');
  console.log('sampleService registered on server');
}