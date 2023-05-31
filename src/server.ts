import mongoose from 'mongoose'
import config from './config'
import app from './app'

async function server() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('connected to MongoDB')
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (e) {
    console.log('error connecting', e)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

server()
