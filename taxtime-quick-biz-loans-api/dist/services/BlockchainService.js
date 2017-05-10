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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const LoggerFactory_1 = require("../utils/LoggerFactory");
const composer_client_1 = require("composer-client");
const config = require("config");
let BlockchainService = class BlockchainService {
    constructor() {
        this.logger = new LoggerFactory_1.LoggerFactory().create();
        let config2 = config.get('taxtime-quick-biz-loans');
        this.logger.debug(config2);
        // these are the credentials to use to connect to the Hyperledger Fabric
        let participantId = config2.get('participantId');
        let participantPwd = config2.get('participantPwd');
        let bizNetworkConnection = new composer_client_1.BusinessNetworkConnection();
        let CONNECTION_PROFILE_NAME = config2.get('connectionProfile');
        let businessNetworkIdentifier = config2.get('businessNetworkIdentifier');
        let businessNetworkDefinition;
        bizNetworkConnection.connect(CONNECTION_PROFILE_NAME, businessNetworkIdentifier, participantId, participantPwd)
            .then((result) => {
            businessNetworkDefinition = result;
            this.logger.debug(result);
            this.logger.debug('here!');
        });
    }
};
BlockchainService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], BlockchainService);
exports.BlockchainService = BlockchainService;
