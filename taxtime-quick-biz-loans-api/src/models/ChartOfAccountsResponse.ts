import {User} from '../models/User';

export class ChartOfAccountsResponse {

    chartOfAccountsId: string;
    assetAccounts: string;
    liabilityAccounts: string;
    equityAccounts: string;
    revenueAccounts: string;
    expenseAccounts: string;

    owner : User;

    offers: any;
    endorsements: any;

    constructor(chartOfAccountsId: string, 
        assetAccounts: string,  
        liabilityAccounts: string,
        equityAccounts: string,
        revenueAccounts: string,
        expenseAccounts: string,
        owner: User,
        offers: any,
        endorsements: any) {
        
        this.offers = offers;
        this.endorsements = endorsements;
        this.chartOfAccountsId = chartOfAccountsId, 
        this.assetAccounts = assetAccounts,  
        this.liabilityAccounts = liabilityAccounts,
        this.equityAccounts = equityAccounts,
        this.revenueAccounts = revenueAccounts,
        this.expenseAccounts = expenseAccounts,
        this.owner = owner
    }
}