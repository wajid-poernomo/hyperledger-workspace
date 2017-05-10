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

    public getParticipant(id: string, id2: string) {

            this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getParticipantRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.User')
            }).then((registry) => {
                return registry.get('wajid.poernomo@gmail.com')
            })
            .then((aResources) => {
                this.logger.debug('got back participants' + aResources);
            });
    }

    /**
     * SaveChartOfAccounts
     */
    public SaveChartOfAccounts() {
            this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
            .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                
                return result;
            }).then((result) =>{
                 return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts')
                        
            }).then((result) =>{
                
                this.chartOfAccountsRegistry = result;
                this.logger.debug('Retrieved Asset Registry: ' + result);

                //TODO: return a promise here!!

                this.logger.debug('Attempting to create new Data');

                let factory = this.businessNetworkDefinition.getFactory();
                let chartOfAccounts = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'ChartOfAccounts', '1');
                chartOfAccounts.chartOfAccountsId = '1';
                chartOfAccounts.owner //get owner from calling user.
                chartOfAccounts.endorsements = [];
                chartOfAccounts.loanOffers = [];

                // These will be values for accounts
                chartOfAccounts.assetAccounts = '2000';
                chartOfAccounts.liabilityAccounts = '3000';
                chartOfAccounts.equityAccounts = '2000';
                chartOfAccounts.revenueAccounts = '2000';
                chartOfAccounts.expenseAccounts = '2000';   

            }).catch((error) =>{
                this.logger.debug(error);
            });
    }
}