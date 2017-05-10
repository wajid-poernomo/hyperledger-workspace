import {Response} from 'express';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BlockchainService} from '../services/BlockchainService';

import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

import {BusinessNetworkConnection} from 'composer-client';
import * as config from 'config';

// net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts

@JsonController('/customerData')
@Service()
export class CustomerDataController {
    private logger: winston.LoggerInstance = new LoggerFactory().create();
    private blockchainService: BlockchainService;

    constructor(blockchainService: BlockchainService) {
        this.blockchainService = blockchainService;
        this.logger.debug('The following service was injected:\n' + this.blockchainService);
    }

    @Post('/chartOfAccounts')
    postCustomerData() {
       this.logger.debug("Attempting to Send Chart Of Accounts to Hyperledger fabric.");

       this.blockchainService.SaveChartOfAccounts();

       return "Attempted";
    }
}