"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggerSettings_1 = require("./LoggerSettings");
const winston = require("winston");
class LoggerFactory {
    create() {
        if (LoggerFactory.logger === null) {
            LoggerFactory.logger = new winston.Logger(new LoggerSettings_1.LoggerSettings().getLoggerSettings());
        }
        return LoggerFactory.logger;
    }
}
LoggerFactory.logger = null;
exports.LoggerFactory = LoggerFactory;
