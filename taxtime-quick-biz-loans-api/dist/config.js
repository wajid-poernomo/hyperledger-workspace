'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class Config {
    getSecret() {
        return 'sUp4hS3cr37kE9c0D3';
    }
    static getServerDirectory() {
        return path.join(process.cwd(), 'dist');
    }
}
exports.Config = Config;
