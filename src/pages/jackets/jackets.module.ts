import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JacketsPage } from './jackets';

@NgModule({
  declarations: [
    JacketsPage,
  ],
  imports: [
    IonicPageModule.forChild(JacketsPage),
  ],
})
export class JacketsPageModule {}
