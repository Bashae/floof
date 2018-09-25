import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { NewPostPage } from '../../pages/new-post/new-post';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class AppHeaderComponent {

  constructor(public auth: AuthProvider, public navCtrl: NavController) {
  
  }

  authValidation() {
    if ( this.auth.isLoggedIn == false ) {
      this.navCtrl.push(LoginPage);
    } else {
      this.auth.logOut();
    }
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  goToNewPostPage() {
    this.navCtrl.setRoot(NewPostPage);
  }

}
