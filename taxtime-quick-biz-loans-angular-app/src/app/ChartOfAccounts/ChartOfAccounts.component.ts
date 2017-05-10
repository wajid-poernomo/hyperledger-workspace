import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ChartOfAccountsService } from './ChartOfAccounts.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-ChartOfAccounts',
	templateUrl: './ChartOfAccounts.component.html',
	styleUrls: ['./ChartOfAccounts.component.css'],
  providers: [ChartOfAccountsService]
})
export class ChartOfAccountsComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      chartOfAccountsId = new FormControl("", Validators.required);
  
      owner = new FormControl("", Validators.required);
  
      endorsements = new FormControl("", Validators.required);
  
      loanOffers = new FormControl("", Validators.required);
  
      assetAccounts = new FormControl("", Validators.required);
  
      liabilityAccounts = new FormControl("", Validators.required);
  
      equityAccounts = new FormControl("", Validators.required);
  
      revenueAccounts = new FormControl("", Validators.required);
  
      expenseAccounts = new FormControl("", Validators.required);
  


  constructor(private serviceChartOfAccounts:ChartOfAccountsService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          chartOfAccountsId:this.chartOfAccountsId,
        
    
        
          owner:this.owner,
        
    
        
          endorsements:this.endorsements,
        
    
        
          loanOffers:this.loanOffers,
        
    
        
          assetAccounts:this.assetAccounts,
        
    
        
          liabilityAccounts:this.liabilityAccounts,
        
    
        
          equityAccounts:this.equityAccounts,
        
    
        
          revenueAccounts:this.revenueAccounts,
        
    
        
          expenseAccounts:this.expenseAccounts
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceChartOfAccounts.getAll()
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
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts",
      
        
          "chartOfAccountsId":this.chartOfAccountsId.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "endorsements":this.endorsements.value,
        
      
        
          "loanOffers":this.loanOffers.value,
        
      
        
          "assetAccounts":this.assetAccounts.value,
        
      
        
          "liabilityAccounts":this.liabilityAccounts.value,
        
      
        
          "equityAccounts":this.equityAccounts.value,
        
      
        
          "revenueAccounts":this.revenueAccounts.value,
        
      
        
          "expenseAccounts":this.expenseAccounts.value
        
      
    };

    this.myForm.setValue({
      
        
          "chartOfAccountsId":null,
        
      
        
          "owner":null,
        
      
        
          "endorsements":null,
        
      
        
          "loanOffers":null,
        
      
        
          "assetAccounts":null,
        
      
        
          "liabilityAccounts":null,
        
      
        
          "equityAccounts":null,
        
      
        
          "revenueAccounts":null,
        
      
        
          "expenseAccounts":null
        
      
    });

    return this.serviceChartOfAccounts.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.myForm.setValue({
      
        
          "chartOfAccountsId":null,
        
      
        
          "owner":null,
        
      
        
          "endorsements":null,
        
      
        
          "loanOffers":null,
        
      
        
          "assetAccounts":null,
        
      
        
          "liabilityAccounts":null,
        
      
        
          "equityAccounts":null,
        
      
        
          "revenueAccounts":null,
        
      
        
          "expenseAccounts":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts",
      
        
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "endorsements":this.endorsements.value,
          
        
    
        
          
            "loanOffers":this.loanOffers.value,
          
        
    
        
          
            "assetAccounts":this.assetAccounts.value,
          
        
    
        
          
            "liabilityAccounts":this.liabilityAccounts.value,
          
        
    
        
          
            "equityAccounts":this.equityAccounts.value,
          
        
    
        
          
            "revenueAccounts":this.revenueAccounts.value,
          
        
    
        
          
            "expenseAccounts":this.expenseAccounts.value
          
        
    
    };

    return this.serviceChartOfAccounts.updateAsset(form.get("chartOfAccountsId").value,this.asset).toPromise();
  }


  deleteAsset(): Promise<any> {

    return this.serviceChartOfAccounts.deleteAsset(this.currentId).toPromise();
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceChartOfAccounts.getAsset(id)
    .toPromise()
    .then((result) => {

      let formObject = {
        
          
            "chartOfAccountsId":null,
          
        
          
            "owner":null,
          
        
          
            "endorsements":null,
          
        
          
            "loanOffers":null,
          
        
          
            "assetAccounts":null,
          
        
          
            "liabilityAccounts":null,
          
        
          
            "equityAccounts":null,
          
        
          
            "revenueAccounts":null,
          
        
          
            "expenseAccounts":null 
          
        
      };



      
        if(result.chartOfAccountsId){
          formObject.chartOfAccountsId = result.chartOfAccountsId;
        }else{
          formObject.chartOfAccountsId = null;
        }
      
        if(result.owner){
          formObject.owner = result.owner;
        }else{
          formObject.owner = null;
        }
      
        if(result.endorsements){
          formObject.endorsements = result.endorsements;
        }else{
          formObject.endorsements = null;
        }
      
        if(result.loanOffers){
          formObject.loanOffers = result.loanOffers;
        }else{
          formObject.loanOffers = null;
        }
      
        if(result.assetAccounts){
          formObject.assetAccounts = result.assetAccounts;
        }else{
          formObject.assetAccounts = null;
        }
      
        if(result.liabilityAccounts){
          formObject.liabilityAccounts = result.liabilityAccounts;
        }else{
          formObject.liabilityAccounts = null;
        }
      
        if(result.equityAccounts){
          formObject.equityAccounts = result.equityAccounts;
        }else{
          formObject.equityAccounts = null;
        }
      
        if(result.revenueAccounts){
          formObject.revenueAccounts = result.revenueAccounts;
        }else{
          formObject.revenueAccounts = null;
        }
      
        if(result.expenseAccounts){
          formObject.expenseAccounts = result.expenseAccounts;
        }else{
          formObject.expenseAccounts = null;
        }
      

      this.myForm.setValue(formObject);

    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "chartOfAccountsId":null,
        
      
        
          "owner":null,
        
      
        
          "endorsements":null,
        
      
        
          "loanOffers":null,
        
      
        
          "assetAccounts":null,
        
      
        
          "liabilityAccounts":null,
        
      
        
          "equityAccounts":null,
        
      
        
          "revenueAccounts":null,
        
      
        
          "expenseAccounts":null 
        
      
      });
  }

}
