import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ChartOfAccountsComponent } from './ChartOfAccounts/ChartOfAccounts.component';
import { OfferComponent } from './Offer/Offer.component';
import { UserComponent } from './User/User.component';
import { TaxAccountantComponent } from './TaxAccountant/TaxAccountant.component';
import { BankComponent } from './Bank/Bank.component';

@NgModule({
  declarations: [
    AppComponent,
    // TransactionComponent,
    
    ChartOfAccountsComponent,
    OfferComponent,
    UserComponent,
    TaxAccountantComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
