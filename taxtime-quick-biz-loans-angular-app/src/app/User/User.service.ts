import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../net.gunungmerapi.taxTimeQuickBizLoansNetwork';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class UserService {
    private NAMESPACE: string = 'net.gunungmerapi.taxTimeQuickBizLoansNetwork.User';

    constructor(private dataService: DataService<User>) {
    };

    public getAll(): Observable<User[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<User> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<User> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<User> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<User> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
