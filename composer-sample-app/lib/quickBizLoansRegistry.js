// 'use strict';

// const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;
// const Table = require('cli-table');
// const winston = require('winston');

// let config = require('config').get('composer-sample-app');

// // these are the credentials to use to connect to the Hyperledger Fabric
// let participantId = config.get('participantId');
// let participantPwd = config.get('participantPwd');
// const LOG = winston.loggers.get('application');

// /** Class for the land registry*/
// class QuickBizLoansRegistry {
//     constructor() {
//         this.bizNetworkConnection = new BusinessNetworkConnection();
//         this.CONNECTION_PROFILE_NAME = config.get('connectionProfile');
//         this.businessNetworkIdentifier = config.get('businessNetworkIdentifier');
//     }

//     init() {
//         return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, participantId, participantPwd)
//             .then((result) => {
//                 this.businessNetworkDefinition = result;
//                 LOG.info('QuickBizLoansRegistry:<init>', 'businessNetworkDefinition obtained', this.businessNetworkDefinition.getIdentifier());
//             })
//             // and catch any exceptions that are triggered
//             .catch(function (error) {
//                 throw error;
//             });
//     }

//     _bootstrapChartOfAccounts() {
//         LOG.info('businessNetworkDefinition:_bootstrapChartOfAccounts', 'getting asset registry for "net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts"');
        
//         let owner;
        
//         LOG.info('about to get asset registry');
        
//         return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts') // how do I know what this name is?

//             .then((result) => {
//                 // got the assest registry for ChartOfAccounts
//                 LOG.info('QuickBizLoansRegistry:_bootstrapChartOfAccounts', 'got asset registry');
//                 this.chartOfAccountsRegistry = result;
//             }).then(() => {
//                 var foo = 10;
//             });
//     }
// }