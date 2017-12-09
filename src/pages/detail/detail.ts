import { ViewController } from 'ionic-angular/navigation/view-controller';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  itemCounter:number=0;
  min = 0;
  max = 0;
  item:any;
  value:number=0;
  constructor(public events:Events,public viewCtrl:ViewController,public user:UserProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
    this.max = this.item.amount;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  reserve(){
    this.user.reserve(this.item._id,this.item.amount-this.value).then(res=>{
      this.item.amout = this.item.amout - this.value;
      this.events.publish('updateUserList',this.item);
      this.viewCtrl.dismiss();
    },err=>{
      console.log(err);
    })
  }
}
