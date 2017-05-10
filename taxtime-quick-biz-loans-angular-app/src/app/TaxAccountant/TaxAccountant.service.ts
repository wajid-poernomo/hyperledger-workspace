import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { TaxAccountant } from '../net.gunungmerapi.taxTimeQuickBizLoansNetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TaxAccountantService {
    private NAMESPACE: string = 'net.gunungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant';

    constructor(private dataService: DataService<TaxAccountant>) {
    };

    public getAll(): Observable<TaxAccountant[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<TaxAccountant> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<TaxAccountant> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<TaxAccountant> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<TaxAccountant> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
