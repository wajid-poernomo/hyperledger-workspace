// export namespace net.gunungmerapi.taxTimeQuickBizLoansNetwork{
   export class ChartOfAccounts {
      chartOfAccountsId: string;
      owner: User;
      endorsements: TaxAccountant[];
      loanOffers: Offer[];
      assetAccounts: string;
      liabilityAccounts: string;
      equityAccounts: string;
      revenueAccounts: string;
      expenseAccounts: string;
   }
   export class Offer {
      offerId: string;
      owner: Bank;
      chartOfAccounts: ChartOfAccounts;
      chartOfAccountsId: string;
      information: string;
   }
   export class User {
      emailAddress: string;
      firstName: string;
      lastName: string;
   }
   export class TaxAccountant {
      taxAccountantId: string;
      chartOfAccounts: ChartOfAccounts;
      firstName: string;
      lastName: string;
   }
   export class Bank {
      bankId: string;
      name: string;
   }
// }
