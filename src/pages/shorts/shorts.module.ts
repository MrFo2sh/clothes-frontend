import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortsPage } from './shorts';

@NgModule({
  declarations: [
    ShortsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShortsPage),
  ],
})
export class ShortsPageModule {}
