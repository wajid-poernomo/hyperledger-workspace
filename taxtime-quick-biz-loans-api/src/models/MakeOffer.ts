  export class MakeOffer {

    transactionId: string;
    offerId: string;
    rate: number;
    contract: string;
    chartOfAccountsId: string;
    bankId: string;

    constructor(offerId: string, rate: number, contract: string, chartOfAccountsId: string, bankId: string) {
        this.offerId = offerId;
        this.rate = rate;
        this.contract = contract;
        this.chartOfAccountsId = chartOfAccountsId;
        this.bankId = bankId;
    }
}