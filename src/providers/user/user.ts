import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs-compat';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserProvider {
  userCollection: AngularFirestoreCollection<any>;
  users: Observable<any[]>;
  user: AngularFirestoreDocument;
  userInfo: Observable;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.userCollection = this.afs.collection('users');
  }

  getUser(userId) {
    return this.userCollection.ref
      .where('u_id', '==', userId)
      .get();
  }

  setUser(userId) {
    let userQuery = this.getUser(userId);
    userQuery.then(res => {
      res.forEach(user => {
        this.userInfo = user.data();
      });
    });
  }
}
