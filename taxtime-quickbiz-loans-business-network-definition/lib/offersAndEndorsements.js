function endorse(chartOfAccounts, taxAccountant){

    if (chartOfAccounts.endorsements == null)
    {
        chartOfAccounts.endorsements = [];
    }

    // check the caller access permissions - are they a tax accountant?
    // (if taxAccountant has valid role)
    chartOfAccounts.endorsements.push(taxAccountant);

    // get registry
    return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts')
        .then(function(chartOfAccountsRegistry){
            return chartOfAccountsRegistry.update(chartOfAccounts);
        });
}

function offerLoanConditions(chartOfAccounts, bank){

    if (chartOfAccounts.loanOffers == null)
    {
        chartOfAccounts.loanOffers = [];
    }
    // check the caller access permissions - are they a tax accountant?
    // (if taxAccountant has valid role)
    chartOfAccounts.loanOffers.push(bank);

    // get registry
    return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts')
        .then(function(chartOfAccountsRegistry){
            return chartOfAccountsRegistry.update(chartOfAccounts);
        });
}