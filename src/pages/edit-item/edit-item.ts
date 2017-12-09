import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminProvider } from '../../providers/admin/admin';
import { Events } from 'ionic-angular/util/events';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  private operation : FormGroup;  
  item:any;
  constructor(public events:Events,public viewCtrl:ViewController,public admin: AdminProvider,public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.operation = this.formBuilder.group({
      name: [''],
      description: [''],
      url: [''],
      price: [''],
      amount: [''],
      category: [''],
      delete: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditItemPage');
  }

  editItem(){
    let del = this.operation.value.delete;
    if(del){
      this.admin.updateItem(this.item,del).then(res=>{
        this.events.publish('updateList');
        this.viewCtrl.dismiss();
      },err=>{
        console.log(err);
      });
    }
  }

}
