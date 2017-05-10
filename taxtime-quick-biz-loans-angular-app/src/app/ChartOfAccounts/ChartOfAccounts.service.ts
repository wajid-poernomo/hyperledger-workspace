import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ChartOfAccounts } from '../net.gunungmerapi.taxTimeQuickBizLoansNetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ChartOfAccountsService {
    private NAMESPACE: string = 'net.gunungmerapi.taxTimeQuickBizLoansNetwork.ChartOfAccounts';

    constructor(private dataService: DataService<ChartOfAccounts>) {
    };

    public getAll(): Observable<ChartOfAccounts[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ChartOfAccounts> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ChartOfAccounts> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ChartOfAccounts> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ChartOfAccounts> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
