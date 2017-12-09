import { AllItemsPage } from './../all-items/all-items';
import { SigninPage } from './../signin/signin';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController) { }

  customer() {
    this.navCtrl.setRoot(AllItemsPage);
  }

  admin() {
    let login = this.modalCtrl.create(SigninPage);
    login.present();
  }
}
