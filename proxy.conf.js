const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8081/',
    //target: 'https://crud-spring-esq7.onrender.com/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
