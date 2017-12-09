import { Api } from './../api/api';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public api:Api) {
    console.log('Hello UserProvider Provider');
  }

  reserve(_id,amount){
    return this.api.post('user/reserve',{_id:_id,amount:amount}).toPromise();
  }

  getItems(category){
    return this.api.post('user/getItems',{category:category}).toPromise();    
  }
}
