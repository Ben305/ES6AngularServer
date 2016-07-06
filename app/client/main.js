angular
  .module('app', [
    'angular-meteor'
  ])
  .controller('SampleController', function(sampleService) {

    var vm = this;

    vm.settings = Meteor.settings.public;

    vm.callServerService = function() {
      sampleService.testFunction().then(
        function success(result) {
          console.log('result', result);
          alert('Result from server call: ' + result);
        });
    }
  });