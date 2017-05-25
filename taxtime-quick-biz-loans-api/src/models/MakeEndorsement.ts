  export class MakeEndorsement {

    endorsementId: string;
    chartOfAccountsId: string;
    taxAccountantId: string;
    information: string;

    constructor(endorsementId: string,chartOfAccountsId: string, taxAccountantId: string, information: string) {
        this.endorsementId = endorsementId;
        this.chartOfAccountsId = chartOfAccountsId;
        this.taxAccountantId = taxAccountantId;
        this.information = information;
    }
}