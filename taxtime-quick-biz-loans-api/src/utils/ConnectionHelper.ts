'use strict';
import 'reflect-metadata';
import * as winston from 'winston';
import { Service } from 'typedi';
import { LoggerFactory } from '../utils/LoggerFactory';
import { BusinessNetworkConnection } from 'composer-client';
import * as config from 'config';
import { User } from '../models/User';
import { Bank } from '../models/Bank';
import { Accountant } from '../models/Accountant';
import { ChartOfAccounts } from '../models/ChartOfAccounts';

@Service()
export class ConnectionHelper {
    private logger: winston.LoggerInstance = new LoggerFactory().create();
    private chartOfAccountsRegistry;
    private config2;
    private participantId;
    private participantPwd;

    private CONNECTION_PROFILE_NAME;
    private businessNetworkIdentifier;
    private businessNetworkDefinition;
    private bizNetworkConnection;

    constructor() {
        this.config2 = config.get('taxtime-quick-biz-loans');

        // these are the credentials to use to connect to the Hyperledger Fabric
        this.participantId = this.config2.get('participantId');
        this.participantPwd = this.config2.get('participantPwd');

        this.bizNetworkConnection = new BusinessNetworkConnection();
        this.CONNECTION_PROFILE_NAME = this.config2.get('connectionProfile');
        this.businessNetworkIdentifier = this.config2.get('businessNetworkIdentifier');
        this.businessNetworkDefinition;

    }

        public async getConnection(): Promise<BusinessNetworkConnection> {

            return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd);

        }

}