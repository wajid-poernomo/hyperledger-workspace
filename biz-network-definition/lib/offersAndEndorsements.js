/**
 * Endorse a ChartOfAccounts
 * @param {net.gunungmerapi.taxTimeQuickBizLoansNetwork.Endorse} Endorse
 * @transaction
 */
function onEndorsement(endorsement) {
	var ed = getFactory().newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'Endorsement', 	endorsement.endorsementId);
      		
	var relAccountant = getFactory().newRelationship('net.gunungmerapi.taxTimeQuickBizLoansNetwork','TaxAccountant', endorsement.taxAccountant.getIdentifier());
      
    ed.taxAccountant = relAccountant;
    ed.information = endorsement.information;  
  	
  	return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Endorsement').then(function(registry){
		return registry.add(ed);
    }).then(function () { return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts') })
      .then(function(chartOfAccountsRegistry) {
    	
  			var chartOfAccounts = endorsement.chartOfAccounts;
          	
      		if (chartOfAccounts.endorsements == null)
    		{
        		chartOfAccounts.endorsements = [];
    		}
      
      		chartOfAccounts.endorsements.push(ed);
      		
      		return chartOfAccountsRegistry.update(chartOfAccounts);      	
    })
}

/**
 * MakeOffer on a User's ChartOfAccounts
 * @param {net.gunungmerapi.taxTimeQuickBizLoansNetwork.MakeOffer} MakeOffer
 * @transaction
 */
function onOffer(makeOffer) {
	var offer = getFactory().newResource('net.gunungmerapi.taxTimeQuickBizLoansNetwork', 'Offer', makeOffer.offerId);
      		
	var relBank = getFactory().newRelationship('net.gunungmerapi.taxTimeQuickBizLoansNetwork','Bank', makeOffer.bank.getIdentifier());
      
    offer.bank = relBank;
  	offer.contract = makeOffer.contract;
    offer.rate = makeOffer.rate;
    offer.information = makeOffer.information;  
  	
  	return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.Offer').then(function(registry){
		return registry.add(offer)
    }).then(function () { return getAssetRegistry('net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts') })
      .then(function(chartOfAccountsRegistry) {
    	
  			var chartOfAccounts = makeOffer.chartOfAccounts;
          	
         	if (chartOfAccounts.offers == null)
    		{
        		chartOfAccounts.offers = [];
    		}
      
      		chartOfAccounts.offers.push(offer);
      		
      		return chartOfAccountsRegistry.update(chartOfAccounts);      	
    })
}











