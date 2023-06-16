import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

async function drakharis() {
  let server: Server;
  try {
    await mongoose.connect(config.database_url as string);
    // await mongoose.connect(
    //   `mongodb+srv://university-admin:aoKZjlKfeXmYjK9T@cluster0.ogqtm.mongodb.net/university-management?retryWrites=true&w=majority`
    // );
    logger.info(`🛢   Database is connected successfully`);
    server = app.listen(config.port, () => {
      logger.info(`Application  listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    // console.log(
    //   'Unhandled Rejection is detected, We are closing server connection'
    // );
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

drakharis();
