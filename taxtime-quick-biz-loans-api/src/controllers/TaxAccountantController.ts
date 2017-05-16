'use strict';
import 'reflect-metadata';
import {Response} from 'express';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BlockchainService} from '../services/BlockchainService';
import {Accountant} from '../models/Accountant';
import {JsonController, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

import {BusinessNetworkConnection} from 'composer-client';
import * as config from 'config';

@JsonController('/accountants')
@Service()
export class TaxAccountantController {
    private logger: winston.LoggerInstance = new LoggerFactory().create();
    private blockchainService: BlockchainService;

    constructor(blockchainService: BlockchainService) {
        this.blockchainService = blockchainService;

    }

    @Get('/')
    getAll() {
       return this.blockchainService.getAllAccountants();
    }


    @Post('/')
    addAccountant(@Body() accountant: Accountant) {
       return this.blockchainService.addAccountant(accountant);
    }
}