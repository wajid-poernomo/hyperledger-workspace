import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ChartOfAccountsComponent } from './ChartOfAccounts/ChartOfAccounts.component';
import { OfferComponent } from './Offer/Offer.component';
import { UserComponent } from './User/User.component';
import { TaxAccountantComponent } from './TaxAccountant/TaxAccountant.component';
import { BankComponent } from './Bank/Bank.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', redirectTo: 'ChartOfAccountsComponent', pathMatch: 'full'},

    { path: 'ChartOfAccounts', component: ChartOfAccountsComponent},
    { path: 'Offer', component: OfferComponent},
    { path: 'User', component: UserComponent},
    { path: 'TaxAccountant', component: TaxAccountantComponent},
    { path: 'Bank', component: BankComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
