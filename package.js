Package.describe({
  name: 'fourquet:reflux',
  version: '0.3.0_5',
  summary: 'RefluxJS wrapped for Meteor.',
  git: 'https://github.com/fourquet/meteor-package-reflux',
  documentation: 'README.md',
});

Npm.depends({
  'reflux': '0.3.0',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('cosmos:browserify@0.10.0', 'client');
  api.addFiles('client.browserify.js', 'client');
  api.addFiles('require-reflux.js', 'server');
  api.export('Reflux');
});
