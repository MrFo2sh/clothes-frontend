import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PantsPage } from './pants';

@NgModule({
  declarations: [
    PantsPage,
  ],
  imports: [
    IonicPageModule.forChild(PantsPage),
  ],
})
export class PantsPageModule {}
