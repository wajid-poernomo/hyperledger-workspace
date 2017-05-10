import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BankService } from './Bank.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Bank',
	templateUrl: './Bank.component.html',
	styleUrls: ['./Bank.component.css'],
  providers: [BankService]
})
export class BankComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      bankId = new FormControl("", Validators.required);
  
      name = new FormControl("", Validators.required);
  


  constructor(private serviceBank:BankService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          bankId:this.bankId,
        
    
        
          name:this.name
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceBank.getAll()
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
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank",
      
        
          "bankId":this.bankId.value,
        
      
        
          "name":this.name.value
        
      
    };

    this.myForm.setValue({
      
        
          "bankId":null,
        
      
        
          "name":null
        
      
    });

    return this.serviceBank.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.myForm.setValue({
      
        
          "bankId":null,
        
      
        
          "name":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank",
      
        
          
        
    
        
          
            "name":this.name.value
          
        
    
    };

    return this.serviceBank.updateAsset(form.get("bankId").value,this.asset).toPromise();
  }


  deleteAsset(): Promise<any> {

    return this.serviceBank.deleteAsset(this.currentId).toPromise();
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceBank.getAsset(id)
    .toPromise()
    .then((result) => {

      let formObject = {
        
          
            "bankId":null,
          
        
          
            "name":null 
          
        
      };



      
        if(result.bankId){
          formObject.bankId = result.bankId;
        }else{
          formObject.bankId = null;
        }
      
        if(result.name){
          formObject.name = result.name;
        }else{
          formObject.name = null;
        }
      

      this.myForm.setValue(formObject);

    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "bankId":null,
        
      
        
          "name":null 
        
      
      });
  }

}
