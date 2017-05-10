import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TaxAccountantService } from './TaxAccountant.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-TaxAccountant',
	templateUrl: './TaxAccountant.component.html',
	styleUrls: ['./TaxAccountant.component.css'],
  providers: [TaxAccountantService]
})
export class TaxAccountantComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      taxAccountantId = new FormControl("", Validators.required);
  
      chartOfAccounts = new FormControl("", Validators.required);
  
      firstName = new FormControl("", Validators.required);
  
      lastName = new FormControl("", Validators.required);
  


  constructor(private serviceTaxAccountant:TaxAccountantService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          taxAccountantId:this.taxAccountantId,
        
    
        
          chartOfAccounts:this.chartOfAccounts,
        
    
        
          firstName:this.firstName,
        
    
        
          lastName:this.lastName
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTaxAccountant.getAll()
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
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant",
      
        
          "taxAccountantId":this.taxAccountantId.value,
        
      
        
          "chartOfAccounts":this.chartOfAccounts.value,
        
      
        
          "firstName":this.firstName.value,
        
      
        
          "lastName":this.lastName.value
        
      
    };

    this.myForm.setValue({
      
        
          "taxAccountantId":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null
        
      
    });

    return this.serviceTaxAccountant.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.myForm.setValue({
      
        
          "taxAccountantId":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant",
      
        
          
        
    
        
          
            "chartOfAccounts":this.chartOfAccounts.value,
          
        
    
        
          
            "firstName":this.firstName.value,
          
        
    
        
          
            "lastName":this.lastName.value
          
        
    
    };

    return this.serviceTaxAccountant.updateAsset(form.get("taxAccountantId").value,this.asset).toPromise();
  }


  deleteAsset(): Promise<any> {

    return this.serviceTaxAccountant.deleteAsset(this.currentId).toPromise();
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceTaxAccountant.getAsset(id)
    .toPromise()
    .then((result) => {

      let formObject = {
        
          
            "taxAccountantId":null,
          
        
          
            "chartOfAccounts":null,
          
        
          
            "firstName":null,
          
        
          
            "lastName":null 
          
        
      };



      
        if(result.taxAccountantId){
          formObject.taxAccountantId = result.taxAccountantId;
        }else{
          formObject.taxAccountantId = null;
        }
      
        if(result.chartOfAccounts){
          formObject.chartOfAccounts = result.chartOfAccounts;
        }else{
          formObject.chartOfAccounts = null;
        }
      
        if(result.firstName){
          formObject.firstName = result.firstName;
        }else{
          formObject.firstName = null;
        }
      
        if(result.lastName){
          formObject.lastName = result.lastName;
        }else{
          formObject.lastName = null;
        }
      

      this.myForm.setValue(formObject);

    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "taxAccountantId":null,
        
      
        
          "chartOfAccounts":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
  }

}
