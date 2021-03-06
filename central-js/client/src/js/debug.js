requirejs.config({
  waitSeconds: 30,
  baseUrl: './js',
  paths: {
    'bower': './bower',
    'angularAMD': 'https://cdn.jsdelivr.net/angular.amd/0.2/angularAMD.min',
    'ngload': 'https://cdn.jsdelivr.net/angular.amd/0.2/ngload.min',
    'script': './script',
    'index': './app/index',
    'documents': './app/documents',
    'journal': './app/journal',
    'about': './app/about',
    'service': './app/service',
    'server': './app/server',
    '404': './app/404'
  },
  shim: {
    'angularAMD': ['bower'],
    'ngload': ['bower'],
    'script': ['angularAMD', 'ngload']
  },
  deps: ['script']
});