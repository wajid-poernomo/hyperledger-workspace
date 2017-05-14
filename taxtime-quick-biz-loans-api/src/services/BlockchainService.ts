'use strict';
import 'reflect-metadata';
import * as winston from 'winston';
import { Service } from 'typedi';
import { LoggerFactory } from '../utils/LoggerFactory';
import { BusinessNetworkConnection } from 'composer-client';
import * as config from 'config';

@Service()
export class BlockchainService {
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

    public async getAllParticipants(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.User');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].emailAddress);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addUser(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.User');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let user = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'User', 'clay.gibs@gmail.com');

                user.firstName = 'clay';
                user.lastName = 'gibs';
                registry.add(user);

                return user;
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].emailAddress);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    public async getAllBanks(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].name);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addBank(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let user = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'Bank', '1');

                user.name = 'Bank Of America';
   
                registry.add(user);

                return user;
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].name);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

   public async getAllAccountants(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].firstName);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addAccountant(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let user = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'TaxAccountant', '1');

                user.firstName = 'Jeff';
                user.lastName = 'Tierk';

                registry.add(user);

                return user;
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].firstName);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    /**
     * SaveChartOfAccounts
     */
    public async SaveChartOfAccounts(): Promise<any> {

        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts');
            }).then((registry) => {

                this.logger.debug('Retrieved Asset Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let chartOfAccounts = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'ChartOfAccounts', '1');

                chartOfAccounts.assetAccounts = '2000';
                chartOfAccounts.liabilityAccounts = '2000';
                chartOfAccounts.equityAccounts = '2000';
                chartOfAccounts.revenueAccounts = '2000';
                chartOfAccounts.expenseAccounts = '2000';

                let owner = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'User', 'clay.gibs@gmail.com');

                owner.firstName = 'clay';
                owner.lastName = 'gibs';
                chartOfAccounts.owner = owner;

                registry.add(chartOfAccounts);

                return chartOfAccounts;
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug('here !' + result[i].assetAccounts);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    public async GetAccounts(): Promise<any> {
        this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].assetAccounts);
                    this.logger.debug(result[i].owner.emailAddress);
                }
                return result;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }
}