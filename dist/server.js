"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
const logger_1 = require("./shared/logger");
/*
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
*/
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        let server;
        try {
            yield mongoose_1.default.connect(config_1.default.database_url);
            logger_1.logger.info(`🛢   Database is connected successfully`);
            server = app_1.default.listen(config_1.default.port, () => {
                logger_1.logger.info(`Application  listening on port ${config_1.default.port}`);
            });
        }
        catch (err) {
            logger_1.errorLogger.error('Failed to connect database', err);
        }
        process.on('unhandledRejection', error => {
            if (server) {
                server.close(() => {
                    logger_1.errorLogger.error(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
bootstrap();
