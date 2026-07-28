/*
=========================================
Real World Example
=========================================
*/

class Logger {
  static instance;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    Logger.instance = this;
  }

  log(message) {
    console.log(message);
  }
}

const logger = new Logger();

logger.log("Application Started");
