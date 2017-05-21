'use strict';
import 'reflect-metadata';
import {Response} from 'express';
import * as winston from 'winston';
import {Service} from 'typedi';
import {LoggerFactory} from '../utils/LoggerFactory';
import {BlockchainService} from '../services/BlockchainService';
import {SimpleAsset} from '../models/SimpleAsset';
import {JsonController, Param, Body, Get, Post, Put, Delete, HeaderParam} from "routing-controllers";

import {BusinessNetworkConnection} from 'composer-client';
import * as config from 'config';

@JsonController('/simpleAssets')
@Service()
export class SimpleAssetController {
    private logger: winston.LoggerInstance = new LoggerFactory().create();
    private blockchainService: BlockchainService;

    constructor(blockchainService: BlockchainService) {
        this.blockchainService = blockchainService;

    }

    @Get('/')
    getAll() {
       return this.blockchainService.getSimpleAssets();
    }

    @Get('/:id')
     getOne(@Param("id") id : string) : Promise<SimpleAsset> {
       return this.blockchainService.findSimpleAsset(id);
    }

    @Post('/')
    addBank(@Body() simpleAsset: SimpleAsset) {
       return this.blockchainService.addSimpleAsset(simpleAsset);
    }
}