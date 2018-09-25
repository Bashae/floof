import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isTapped: boolean = false;
  isClicked: boolean = false;
  isFavorite: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  goToUserProfile() {
    this.navCtrl.setRoot(ProfilePage);
  }

  tapPost() {
    if(!this.isTapped) {
      this.isTapped = true;
    } else {
      this.likePost();
    }

    this.resetPost();
  }

  resetPost() {
    let _that = this;

    setTimeout(function() {
      _that.isTapped = false;
    }, 500);
  }

  likePost() {
    this.isClicked = true;
  }

  favoritePost() {
    this.isFavorite = !this.isFavorite;
    console.log('favorite post');
  }
  
  openComments() {
    console.log('open comments');
  }

  sharePost() {
    console.log('share post');
  }
}
