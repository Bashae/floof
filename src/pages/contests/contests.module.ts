import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContestsPage } from './contests';

@NgModule({
  declarations: [
    ContestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContestsPage),
  ],
})
export class ContestsPageModule {}
