import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from './User.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-User',
	templateUrl: './User.component.html',
	styleUrls: ['./User.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;

  
      emailAddress = new FormControl("", Validators.required);
  
      firstName = new FormControl("", Validators.required);
  
      lastName = new FormControl("", Validators.required);
  


  constructor(private serviceUser:UserService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          emailAddress:this.emailAddress,
        
    
        
          firstName:this.firstName,
        
    
        
          lastName:this.lastName
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUser.getAll()
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
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User",
      
        
          "emailAddress":this.emailAddress.value,
        
      
        
          "firstName":this.firstName.value,
        
      
        
          "lastName":this.lastName.value
        
      
    };

    this.myForm.setValue({
      
        
          "emailAddress":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null
        
      
    });

    return this.serviceUser.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.myForm.setValue({
      
        
          "emailAddress":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User",
      
        
          
        
    
        
          
            "firstName":this.firstName.value,
          
        
    
        
          
            "lastName":this.lastName.value
          
        
    
    };

    return this.serviceUser.updateAsset(form.get("emailAddress").value,this.asset).toPromise();
  }


  deleteAsset(): Promise<any> {

    return this.serviceUser.deleteAsset(this.currentId).toPromise();
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceUser.getAsset(id)
    .toPromise()
    .then((result) => {

      let formObject = {
        
          
            "emailAddress":null,
          
        
          
            "firstName":null,
          
        
          
            "lastName":null 
          
        
      };



      
        if(result.emailAddress){
          formObject.emailAddress = result.emailAddress;
        }else{
          formObject.emailAddress = null;
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
      
        
          "emailAddress":null,
        
      
        
          "firstName":null,
        
      
        
          "lastName":null 
        
      
      });
  }

}
