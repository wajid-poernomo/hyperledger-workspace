'use strict';
import 'reflect-metadata';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BusinessNetworkConnection} from 'composer-client';
import * as config from 'config';

@Service()
export class BlockchainService {
    private logger: winston.LoggerInstance = new LoggerFactory().create();

    constructor() {
        let config2 = config.get('taxtime-quick-biz-loans');
        this.logger.debug(config2);
        // these are the credentials to use to connect to the Hyperledger Fabric
        let participantId = config2.get('participantId');
        let participantPwd = config2.get('participantPwd');
    
        let bizNetworkConnection = new BusinessNetworkConnection();
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
}