import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { PostProvider } from '../../providers/post/post';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  isGrid: boolean = true;
  currentOwner: boolean = false;
  owner_id: string;
  owner: any = {
    "description": "",
    "email": "",
    "follower_count": 0,
    "following_count": 0,
    "image": "",
    "post_count": 0,
    "u_id": "",
    "username": ""
  }
  owner_posts: any[];
  lastOwnerItem: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public profileService: ProfileProvider,
    public auth: AuthProvider,
    public postService: PostProvider
  ) {
    this.owner_id = navParams.get('owner_id');
    this.getOwnerInfo();
    this.getStartOwnerPosts();
  }

  getOwnerInfo() {
    let ownerReq = this.profileService.getUserInfo(this.owner_id);
    ownerReq.then(res => {
      res.forEach(el => {
        this.owner = el.data();
        if(this.auth.userId == this.owner_id) {
          this.currentOwner = true;
        }
      })
    })
  }

  getStartOwnerPosts() {
    this.owner_posts = [];
    console.log('posts starting');

    let ownerPostsReq = this.postService.getOwnerStartPosts(this.owner_id);
    ownerPostsReq.then(res => {
      res.forEach(el => {
        this.owner_posts.push(el.data());
        this.lastOwnerItem = el;
      })
    })
  }

  getMoreOwnerPosts() {
    let moreOwnerPostsReq = this.postService.getMoreOwnerPosts(this.owner_id, this.lastOwnerItem);
    moreOwnerPostsReq.then(res => {
      res.forEach(el => {
        this.owner_posts.push(el.data());
        this.lastOwnerItem = el;
      })
    })
  }
}
