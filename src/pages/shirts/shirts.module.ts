import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShirtsPage } from './shirts';

@NgModule({
  declarations: [
    ShirtsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShirtsPage),
  ],
})
export class ShirtsPageModule {}
