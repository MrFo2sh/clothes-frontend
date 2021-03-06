import { DetailPage } from './../detail/detail';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';

/**
 * Generated class for the JacketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jackets',
  templateUrl: 'jackets.html',
})
export class JacketsPage {
  
  listOfItems:any=[];  
  constructor(public events:Events,public user:UserProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.events.subscribe('updateUserList',(sentItem)=>{
      this.user.getItems('jackets').then(res=>{
        let resp = res.json();
        this.listOfItems = resp.items;
      },err=>{
        console.log(err);
      })
    })
  }

  ionViewWillLoad() {
    this.user.getItems('jackets').then(res=>{
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
