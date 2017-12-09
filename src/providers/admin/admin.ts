import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Api } from '../providers';

/*
  Generated class for the AdminProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminProvider {

  constructor(public api : Api,public http: HttpClient) {
    console.log('Hello AdminProvider Provider');
  }

  signin(email,password){
    return this.api.post('admin/login',{email:email,password:password}).toPromise();
  }

  addItem(name,description,price,amount,category,url){
    return this.api.post('admin/addItem',{name:name,description:description,url:url,price:price,amount:amount,category:category}).toPromise();
  }

  updateItem(item,del){
    return this.api.post('admin/updateItem',{item:item,del:del}).toPromise();
  }

  getItems(){
    return this.api.post('admin/getItems',{}).toPromise();    
  }
}
