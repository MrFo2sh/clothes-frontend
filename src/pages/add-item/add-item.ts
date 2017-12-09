import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminProvider } from '../../providers/admin/admin';
import { ViewController } from 'ionic-angular/navigation/view-controller';


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  private operation : FormGroup;
  constructor(public viewCtrl:ViewController,public events: Events,public admin:AdminProvider,public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
    this.operation = this.formBuilder.group({
      name: [''],
      description: [''],
      url: [''],
      price: [''],
      amount: [''],
      category: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addItem(){
    console.log("add item clicked")
    console.log(this.operation.value);
    let name = this.operation.value.name;
    let description = this.operation.value.description;
    let url = this.operation.value.url;
    let price = this.operation.value.price;
    let amount = this.operation.value.amount;
    let category = this.operation.value.category;
    if(name&&description&&url&&price&&amount&&category){
      this.admin.addItem(name,description,price,amount,category,url)
      .then(res=>{
        this.events.publish('updateList');
        console.log("item added succesfully")        
        this.viewCtrl.dismiss();
      },err=>{
        console.log(err);
      })
    }
  }

}
