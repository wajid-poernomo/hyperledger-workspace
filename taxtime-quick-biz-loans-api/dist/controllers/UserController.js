'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const LoggerFactory_1 = require("../utils/LoggerFactory");
const BlockchainService_1 = require("../services/BlockchainService");
const User_1 = require("../models/User");
const routing_controllers_1 = require("routing-controllers");
let UserController = class UserController {
    constructor(blockchainService) {
        this.logger = new LoggerFactory_1.LoggerFactory().create();
        this.blockchainService = blockchainService;
    }
    getAll() {
        return this.blockchainService.getUsers();
    }
    addUser(user) {
        return this.blockchainService.addUser(user);
    }
};
__decorate([
    routing_controllers_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Post('/'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addUser", null);
UserController = __decorate([
    routing_controllers_1.JsonController('/users'),
    typedi_1.Service(),
    __metadata("design:paramtypes", [BlockchainService_1.BlockchainService])
], UserController);
exports.UserController = UserController;
