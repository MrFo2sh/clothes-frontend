import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AdminProvider } from '../../providers/admin/admin';

/**
 * Generated class for the AllItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-items',
  templateUrl: 'all-items.html',
})
export class AllItemsPage {
  listOfItems:any=[];  
  constructor(public events:Events,public admin:AdminProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.events.subscribe('updateUserList',(sentItem)=>{
      this.admin.getItems().then(res=>{
        let resp = res.json();
        this.listOfItems = resp.items;
      },err=>{
        console.log(err);
      })
    })
  }

  ionViewWillLoad() {
    this.admin.getItems().then(res=>{
      let resp = res.json();
      this.listOfItems = resp.items;
    },err=>{
      console.log(err);
    })
  }

  openDetail(item){
    let itemDetail = this.modalCtrl.create(DetailPage,{item:item});
    itemDetail.present();
  }

}
