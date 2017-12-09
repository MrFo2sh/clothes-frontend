import { AdminProvider } from './../../providers/admin/admin';
import { EditItemPage } from './../edit-item/edit-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  listOfItems:any=[];
  constructor(public events: Events,public admin:AdminProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.events.subscribe('updateList',()=>{
      this.admin.getItems().then(res=>{
        let resp = res.json();
        this.listOfItems = resp.items;
      },err=>{
        console.log(err);
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  ionViewWillLoad() {
    this.admin.getItems().then(res=>{
      let resp = res.json();
      this.listOfItems = resp.items;
    },err=>{
      console.log(err);
    })
  }

  addModal(){
    let addItem = this.modalCtrl.create(AddItemPage);
    addItem.present();
  }

  editModal(item){
    let editItem = this.modalCtrl.create(EditItemPage,{item:item});
    editItem.present();
  }

}
