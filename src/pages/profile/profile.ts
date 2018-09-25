import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  isGrid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  followUser() {
    console.log('follow user');
  }

}
