"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const LoggerFactory_1 = require("./utils/LoggerFactory");
class App {
    constructor() {
        this.logger = new LoggerFactory_1.LoggerFactory().create();
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express();
            app.use(cors());
            // Dependency injection
            routing_controllers_1.useContainer(typedi_1.Container);
            typedi_1.Container.set(LoggerFactory_1.LoggerFactory, new LoggerFactory_1.LoggerFactory());
            // initialize routing
            routing_controllers_1.useExpressServer(app, {
                routePrefix: '/api/v1',
                controllers: [__dirname + '/api/v1/*.js']
            });
            // Log requests
            app.use(morgan('dev', {
                stream: {
                    skip: (request, response) => response.statusCode < 400,
                    write: (message) => {
                        this.logger.debug(message);
                    }
                }
            }));
            // Start server
            const port = (process.env.VCAP_PORT || process.env.PORT || 8080);
            const host = (process.env.VCAP_HOST || process.env.HOST || 'localhost');
            app.listen(port);
            this.logger.info(`[App] Express server listening at http://${host}:${port}`);
        });
    }
}
process.on('unhandledRejection', (error, promise) => {
    this.logger.error('Unhandled rejection', error.stack);
});
new App().run();
