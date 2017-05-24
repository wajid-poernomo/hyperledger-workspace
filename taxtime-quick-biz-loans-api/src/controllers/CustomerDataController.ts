import {Response} from 'express';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BlockchainService} from '../services/BlockchainService';
import {ChartOfAccounts} from '../models/ChartOfAccounts';
import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

import {BusinessNetworkConnection} from 'composer-client';
import * as config from 'config';

@JsonController('/customerData')
@Service()
export class CustomerDataController {
    private logger: winston.LoggerInstance = new LoggerFactory().create();
    private blockchainService: BlockchainService;

    constructor(blockchainService: BlockchainService) {
        this.blockchainService = blockchainService;
        this.logger.debug('The following service was injected:\n' + this.blockchainService);
    }

    @Post('/accounts')
    postCustomerData(@Body() chartOfAccounts: ChartOfAccounts) {
        this.logger.debug("Attempting to Send Chart Of Accounts to Hyperledger fabric.");

        return this.blockchainService.SaveChartOfAccounts(chartOfAccounts);
    }

    @Get('/accounts')
    getChartOfAccounts() {
       this.logger.debug("Attempting to get Accounts Hyperledger fabric.");

       return this.blockchainService.GetAccounts();
    }
}