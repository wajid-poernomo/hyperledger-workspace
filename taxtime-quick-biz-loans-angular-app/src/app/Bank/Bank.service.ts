import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Bank } from '../net.gunungmerapi.taxTimeQuickBizLoansNetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class BankService {
    private NAMESPACE: string = 'net.gunungmerapi.taxTimeQuickBizLoansNetwork.Bank';

    constructor(private dataService: DataService<Bank>) {
    };

    public getAll(): Observable<Bank[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Bank> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Bank> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Bank> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Bank> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
