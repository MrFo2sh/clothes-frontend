import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TshirtsPage } from './tshirts';

@NgModule({
  declarations: [
    TshirtsPage,
  ],
  imports: [
    IonicPageModule.forChild(TshirtsPage),
  ],
})
export class TshirtsPageModule {}
