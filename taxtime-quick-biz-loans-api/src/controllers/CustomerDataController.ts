import {Response} from 'express';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BlockchainService} from '../services/BlockchainService';
import {ChartOfAccounts} from '../models/ChartOfAccounts';
import { MakeOffer } from '../models/MakeOffer';
import { MakeEndorsement } from '../models/MakeEndorsement';
import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

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

    @Post('/accounts/offer')
    postOffer(@Body() makeOffer: MakeOffer) {
        this.logger.debug("Attempting make offer Hyperledger fabric.");

        return this.blockchainService.MakeOffer(makeOffer);
    }

    @Post('/accounts/endorse')
    postEndorsement(@Body() makeEndorsement: MakeEndorsement) {
        this.logger.debug("Attempting make endorsement Hyperledger fabric.");

        return this.blockchainService.MakeEndorsement(makeEndorsement);
    }

    @Get('/accounts')
    getChartOfAccounts() {
       this.logger.debug("Attempting to get accounts Hyperledger fabric.");

       return this.blockchainService.GetAccounts();
    }

    @Get('/accounts/:id')
    getChartOfAccountsById(@Param("id") id: string) {
       this.logger.debug("Attempting to get accounts Hyperledger fabric.");

       return this.blockchainService.GetAccountsById(id);
    }
}