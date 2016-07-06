Package.describe({
  name: 'business-package',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');

  // Works with ecmascript
  api.use('ecmascript');

  // Does not work with angular-babel
  //api.use('pbastowski:angular-babel');

  api.use('netanelgilad:angular-server');

  api.mainModule('business-package.js', 'server');
});
