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
import { ChartOfAccountsResponse } from '../models/ChartOfAccountsResponse';

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

    public async getUsers(): Promise<any> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.User');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let foo = [];
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].emailAddress);

                    foo.push(new User(result[i].firstName, result[i].lastName, result[i].emailAddress));
                }
                return foo;

            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addUser(newUser: User): Promise<User> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.User');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();
                let user = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'User', newUser.emailAddress);
                user.firstName = newUser.firstName;
                user.lastName = newUser.lastName;

                registry.add(user);

                return user;

            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].emailAddress);
                }
                return newUser;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    public async getAllBanks(): Promise<Bank> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let banks = [];
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].name);
                    banks.push(new Bank(result[i].bankId, result[i].name));
                }
                return banks;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addBank(newBank: Bank): Promise<Bank> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let bank = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'Bank', newBank.bankId);
                bank.bankId = newBank.bankId;
                bank.name = newBank.name;

                registry.add(bank);

                return newBank;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    public async getAllAccountants(): Promise<Accountant> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant');
            }).then((registry) => {
                return registry.getAll();
            }).then((result) => {
                let accountants = [];
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].firstName);
                    accountants.push(new Accountant(result[i].taxAccountantId, result[i].firstName, result[i].lastName));
                }
                return accountants;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }


    public async addAccountant(accountant: Accountant): Promise<Accountant> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant');
            }).then((registry) => {

                this.logger.debug('Retrieved Participant Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let acc = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'TaxAccountant', accountant.taxAccountantId);

                acc.firstName = accountant.firstName;
                acc.lastName = accountant.lastName;

                registry.add(acc);

                return accountant;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    /**
     * SaveChartOfAccounts
     */
    public async SaveChartOfAccounts(accounts: ChartOfAccounts): Promise<ChartOfAccounts> {

        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts');
            }).then((registry) => {

                this.logger.debug('Retrieved Asset Registry: ' + registry);

                let factory = this.businessNetworkDefinition.getFactory();

                let chartOfAccounts = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'ChartOfAccounts', accounts.chartOfAccountsId);

                chartOfAccounts.assetAccounts = accounts.assetAccounts;
                chartOfAccounts.liabilityAccounts = accounts.liabilityAccounts;
                chartOfAccounts.equityAccounts = accounts.equityAccounts;
                chartOfAccounts.revenueAccounts = accounts.revenueAccounts;
                chartOfAccounts.expenseAccounts = accounts.expenseAccounts;
                chartOfAccounts.offers = [];
                chartOfAccounts.endorsements = [];
                let owner = factory.newRelationship('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'User', accounts.ownerId);

                chartOfAccounts.owner = owner;

                registry.add(chartOfAccounts);

                return accounts;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }

    public async GetAccounts(): Promise<ChartOfAccounts> {
        return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts');
            }).then((registry) => {
                return registry.resolveAll();
            }).then((result) => {
                let accounts = [];
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].assetAccounts);
                    this.logger.debug(result[i].owner.emailAddress);
                    accounts.push(
                        new ChartOfAccountsResponse(result[i].chartOfAccountsId,
                            result[i].assetAccounts,
                            result[i].liabilityAccounts,
                            result[i].equityAccounts,
                            result[i].revenueAccounts,
                            result[i].expenseAccounts,
                            new User(result[i].owner.firstName, result[i].owner.lastName, result[i].owner.emailAddress),
                            result[i].offers,
                            result[i].endorsements
                            ))
                }
                return accounts;
            }).catch((error) => {
                this.logger.debug(error);
            });
    }
}