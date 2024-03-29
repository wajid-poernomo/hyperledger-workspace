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
const typedi_1 = require("typedi");
const LoggerFactory_1 = require("../utils/LoggerFactory");
const composer_client_1 = require("composer-client");
const config = require("config");
const User_1 = require("../models/User");
const Bank_1 = require("../models/Bank");
const Accountant_1 = require("../models/Accountant");
const ChartOfAccountsResponse_1 = require("../models/ChartOfAccountsResponse");
let BlockchainService = class BlockchainService {
    constructor() {
        this.logger = new LoggerFactory_1.LoggerFactory().create();
        this.config2 = config.get('taxtime-quick-biz-loans');
        // these are the credentials to use to connect to the Hyperledger Fabric
        this.participantId = this.config2.get('participantId');
        this.participantPwd = this.config2.get('participantPwd');
        this.bizNetworkConnection = new composer_client_1.BusinessNetworkConnection();
        this.CONNECTION_PROFILE_NAME = this.config2.get('connectionProfile');
        this.businessNetworkIdentifier = this.config2.get('businessNetworkIdentifier');
        this.businessNetworkDefinition;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
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
                    this.logger.debug(result[i].userId);
                    foo.push(new User_1.User(result[i].firstName, result[i].lastName, result[i].userId));
                }
                return foo;
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
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
                let user = factory.newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'User', newUser.userId);
                user.firstName = newUser.firstName;
                user.lastName = newUser.lastName;
                registry.add(user);
                return user;
            }).then((result) => {
                let arrayLength = result.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.logger.debug(result[i].id);
                }
                return newUser;
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    getAllBanks() {
        return __awaiter(this, void 0, void 0, function* () {
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
                    banks.push(new Bank_1.Bank(result[i].bankId, result[i].name));
                }
                return banks;
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    addBank(newBank) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    getAllAccountants() {
        return __awaiter(this, void 0, void 0, function* () {
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
                    accountants.push(new Accountant_1.Accountant(result[i].taxAccountantId, result[i].firstName, result[i].lastName));
                }
                return accountants;
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    addAccountant(accountant) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    MakeOffer(makeOffer) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
                .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getTransactionRegistry();
            }).then((registry) => {
                let factory = this.businessNetworkDefinition.getFactory();
                let transaction = factory.newTransaction("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "MakeOffer");
                transaction.bank = factory.newRelationship("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "Bank", makeOffer.bankId); //relationship.
                transaction.chartOfAccounts = factory.newRelationship("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "ChartOfAccounts", makeOffer.chartOfAccountsId);
                transaction.offerId = makeOffer.offerId;
                transaction.rate = makeOffer.rate;
                transaction.contract = makeOffer.contract;
                return this.bizNetworkConnection.submitTransaction(transaction);
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    MakeEndorsement(makeEndorsement) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
                .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getTransactionRegistry();
            }).then((registry) => {
                let factory = this.businessNetworkDefinition.getFactory();
                let transaction = factory.newTransaction("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "Endorse");
                transaction.taxAccountant = factory.newRelationship("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "TaxAccountant", makeEndorsement.taxAccountantId);
                transaction.chartOfAccounts = factory.newRelationship("net.gunungmerapi.taxTimeQuickBizLoansNetwork", "ChartOfAccounts", makeEndorsement.chartOfAccountsId);
                transaction.endorsementId = makeEndorsement.endorsementId;
                transaction.information = makeEndorsement.information;
                return this.bizNetworkConnection.submitTransaction(transaction);
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    /**
     * SaveChartOfAccounts
     */
    SaveChartOfAccounts(accounts) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    GetAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
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
                    this.logger.debug(result[i].owner.userId);
                    accounts.push(new ChartOfAccountsResponse_1.ChartOfAccountsResponse(result[i].chartOfAccountsId, result[i].assetAccounts, result[i].liabilityAccounts, result[i].equityAccounts, result[i].revenueAccounts, result[i].expenseAccounts, new User_1.User(result[i].owner.firstName, result[i].owner.lastName, result[i].owner.userId), result[i].offers, result[i].endorsements));
                }
                return accounts;
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
    GetAccountsById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.bizNetworkConnection.connect(this.CONNECTION_PROFILE_NAME, this.businessNetworkIdentifier, this.participantId, this.participantPwd)
                .then((result) => {
                this.businessNetworkDefinition = result;
                this.logger.debug('Connected to: ' + this.businessNetworkIdentifier);
                return result;
            }).then((result) => {
                return this.bizNetworkConnection.getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts');
            }).then((registry) => {
                return registry.resolve(id);
            }).then((result) => {
                return new ChartOfAccountsResponse_1.ChartOfAccountsResponse(result.chartOfAccountsId, result.assetAccounts, result.liabilityAccounts, result.equityAccounts, result.revenueAccounts, result.expenseAccounts, new User_1.User(result.owner.firstName, result.owner.lastName, result.owner.userId), result.offers, result.endorsements);
            }).catch((error) => {
                this.logger.debug(error);
            });
        });
    }
};
BlockchainService = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], BlockchainService);
exports.BlockchainService = BlockchainService;
