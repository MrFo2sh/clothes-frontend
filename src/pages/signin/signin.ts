import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { AdminProvider } from '../../providers/admin/admin';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  private operation : FormGroup;
  constructor(private formBuilder: FormBuilder,public admin:AdminProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.operation = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  login(){
    let email = this.operation.value.email;
    let password = this.operation.value.password;
    console.log(email,password)
    if(email && password){
      this.admin.signin(email,password).then(res=>{
        this.navCtrl.setRoot(AdminPage);
      },err=>{
        console.log(err);
      })
    }
  }
}
