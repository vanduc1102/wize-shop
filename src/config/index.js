const { isProduction } = require('../utils/environment')

const swaggerOption = {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Wize Shop Swagger',
      description: 'Wize Shop Swagger API.',
      version: '0.1.0'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: !isProduction
}

module.exports = swaggerOption
