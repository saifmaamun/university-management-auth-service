import mongoose from 'mongoose'
import config from './config'
import app from './app'
import logger from './shared/logger'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('connected to MongoDB')
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (e) {
    logger.error('error connecting', e)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server()
