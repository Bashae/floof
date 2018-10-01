import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../../pages/profile/profile';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isTapped: boolean = false;
  isClicked: boolean = false;
  isFavorite: boolean = false;
  posts: any[];
  lastItem: any;

  constructor(
    public navCtrl: NavController,
    public postService: PostProvider
  ) {
    this.getStartPosts();
  }

  goToUserProfile(owner_id) {
    this.navCtrl.setRoot(ProfilePage, {"owner_id": owner_id});
  }

  getStartPosts() {
    console.log('should look for posts');
    this.postService.getStartPosts()
      .then(res => {
        console.log('should set posts');
        this.posts = [];
        console.log(res.docs);
        console.log(res.docs.length);
        if(res.docs.length > 0) {
          res.docs.forEach(doc => {
            this.posts.push(doc.data())
            this.lastItem = doc;
            console.log('what is posts');
          })
        } else {
          let post = {
            background: '011',
            content: 'Hello World, This is going.',
            id: 1,
            favorites: 10,
            likes: 10,
            overlay_color: 'rgba(0, 0, 0, .35)',
            text_color: 'rgba(255, 255, 255)',
            timestamp: '12345',
            u_id: '1'
          };
          this.posts.push(post);
        }
      })
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
