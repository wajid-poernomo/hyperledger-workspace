"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const path = require("path");
const config_1 = require("../config");
class LoggerSettings {
    getLoggerSettings() {
        return {
            transports: [
                new winston.transports.File({
                    level: 'warn',
                    filename: path.join(config_1.Config.getServerDirectory(), '../logs.log'),
                    handleExceptions: true,
                    json: true,
                    maxsize: 5242880,
                    maxFiles: 5,
                    colorize: false
                }),
                new winston.transports.Console({
                    level: 'debug',
                    prettyPrint: true,
                    handleExceptions: true,
                    json: false,
                    colorize: true
                })
            ],
            exitOnError: false
        };
    }
}
exports.LoggerSettings = LoggerSettings;
