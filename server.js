require('dotenv').config()
const PORT = process.env.SERVER_PORT || 3000
const fastify = require('./src/app')

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
