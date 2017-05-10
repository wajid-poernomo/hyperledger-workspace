import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Offer } from '../net.gunungmerapi.taxTimeQuickBizLoansNetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class OfferService {
    private NAMESPACE: string = 'net.gunungmerapi.taxTimeQuickBizLoansNetwork.Offer';

    constructor(private dataService: DataService<Offer>) {
    };

    public getAll(): Observable<Offer[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Offer> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Offer> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Offer> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Offer> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
