import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OfferService } from './Offer.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Offer',
	templateUrl: './Offer.component.html',
	styleUrls: ['./Offer.component.css'],
  providers: [OfferService]
})
export class OfferComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      offerId = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  
      chartOfAccounts = new FormControl("", Validators.required);
  
      chartOfAccountsId = new FormControl("", Validators.required);
  
      information = new FormControl("", Validators.required);
  


  constructor(private serviceOffer:OfferService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          offerId:this.offerId,
        
    
        
          owner:this.owner,
        
    
        
          chartOfAccounts:this.chartOfAccounts,
        
    
        
          chartOfAccountsId:this.chartOfAccountsId,
        
    
        
          information:this.information
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceOffer.getAll()
    .toPromise()
    .then((result) => {
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    });
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.Offer",
      
        
          "offerId":this.offerId.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "chartOfAccounts":this.chartOfAccounts.value,
        
      
        
          "chartOfAccountsId":this.chartOfAccountsId.value,
        
      
        
          "information":this.information.value
        
      
    };

    this.myForm.setValue({
      
        
          "offerId":null,
        
      
        
          "owner":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "chartOfAccountsId":null,
        
      
        
          "information":null
        
      
    });

    return this.serviceOffer.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.myForm.setValue({
      
        
          "offerId":null,
        
      
        
          "owner":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "chartOfAccountsId":null,
        
      
        
          "information":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.Offer",
      
        
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "chartOfAccounts":this.chartOfAccounts.value,
          
        
    
        
          
            "chartOfAccountsId":this.chartOfAccountsId.value,
          
        
    
        
          
            "information":this.information.value
          
        
    
    };

    return this.serviceOffer.updateAsset(form.get("offerId").value,this.asset).toPromise();
  }


  deleteAsset(): Promise<any> {

    return this.serviceOffer.deleteAsset(this.currentId).toPromise();
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceOffer.getAsset(id)
    .toPromise()
    .then((result) => {

      let formObject = {
        
          
            "offerId":null,
          
        
          
            "owner":null,
          
        
          
            "chartOfAccounts":null,
          
        
          
            "chartOfAccountsId":null,
          
        
          
            "information":null 
          
        
      };



      
        if(result.offerId){
          formObject.offerId = result.offerId;
        }else{
          formObject.offerId = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      
        if(result.chartOfAccounts){
          formObject.chartOfAccounts = result.chartOfAccounts;
        }else{
          formObject.chartOfAccounts = null;
        }
      
        if(result.chartOfAccountsId){
          formObject.chartOfAccountsId = result.chartOfAccountsId;
        }else{
          formObject.chartOfAccountsId = null;
        }
      
        if(result.information){
          formObject.information = result.information;
        }else{
          formObject.information = null;
        }
      

      this.myForm.setValue(formObject);

    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "offerId":null,
        
      
        
          "owner":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "chartOfAccountsId":null,
        
      
        
          "information":null 
        
      
      });
  }

}
