import {User} from '../models/User';

export class ChartOfAccounts {

    chartOfAccountsId: string;
    assetAccounts: string;
    liabilityAccounts: string;
    equityAccounts: string;
    revenueAccounts: string;
    expenseAccounts: string;

    ownerId : string;

    constructor(chartOfAccountsId: string, 
        assetAccounts: string,  
        liabilityAccounts: string,
        equityAccounts: string,
        revenueAccounts: string,
        expenseAccounts: string,
        owner: string) {
        
        this.chartOfAccountsId = chartOfAccountsId, 
        this.assetAccounts = assetAccounts,  
        this.liabilityAccounts = liabilityAccounts,
        this.equityAccounts = equityAccounts,
        this.revenueAccounts = revenueAccounts,
        this.expenseAccounts = expenseAccounts,
        this.ownerId = owner
    }
}